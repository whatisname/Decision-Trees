# -*- coding: utf-8 -*-
"""
Created on Sat Mar  2 15:51:38 2019

@author: XX
"""
from DTNode import DTNode
import plot
import numpy as np

class DecisionTree:
    def __init__(self, dtData):
        #--------------------------
        self.root = None
        self.data = dtData
        #--------------------------
        self.forest = []
        self.prediction = []
        
    def __generate__(self, sample_array, prune, splitby = 'infogain'):
        node = DTNode(data = self.data,
                           sample_array = sample_array, 
                           attributes_to_analysis = list(range(len(self.data.attribute_labels))), 
                           prune = prune,
                           splitby = splitby)
        node.split()
        return node
    
    def __predict__(self, node, sample_array):
        pred = []
        if node:
            for sample_index in sample_array:
                pred.append(node.predict(self.data.dataset[sample_index]))
        return pred
    
    def generate_tree(self, prune = 1.0,splitby = 'infogain'):
        
        self.root = self.__generate__(range(len(self.data.dataset_labels)), prune = prune)
#        self.root.split()
    
    def predict(self, testing_dtData):
        pred = []
        if self.root:
            for sample in testing_dtData.dataset:
                pred.append(self.root.predict(sample))
        return pred
    
    def cross_validation(self, fold, prune = 1.0, splitby = 'infogain'):
        if fold <= 1 or fold > len(self.data.dataset):
            print('Error: invalid fold.')
            return
        sample_size = len(self.data.dataset)
        sample_array = list(range(len(self.data.dataset)))
        step = int(sample_size/fold)
        for i in range(0, fold):
            training_array = sample_array[0:i*step] + sample_array[i*step+step:len(sample_array)]
            testing_array = sample_array[i*step:i*step+step]
            node = self.__generate__(training_array, prune, splitby)
            self.forest.append(node)
            self.prediction.append(self.__predict__(node, testing_array))
        return {'forest':self.forest, 'predict':self.prediction}
    
    def confusion_matrix(self, prediction, testing_DTData):
        sample_index = 0
        cm = []
        for i in testing_DTData.labels:
            cm.append([0]*len(testing_DTData.labels))
        for sample_index, label in enumerate(prediction):
            if label != 'no sample':
                real_label_index = testing_DTData.labels.index(testing_DTData.dataset_labels[sample_index])
                predict_label_index = testing_DTData.labels.index(label)
                cm[real_label_index][predict_label_index] += 1
            sample_index += 1
        print(cm)
        plot.confusion_matrix(cm  = np.array(cm),
                      target_names = testing_DTData.labels,
                      normalize = False,
                      title        = "Confusion Matrix, Normalized")
    
    def accuracy_crsv(self, prediction):
        """Caculate the best accuracy and worst accuracy."""
        # TODO: not working
        sample_index = 0
        accuracy = []
        for list1 in prediction:
            cm = []
            for i in self.data.labels:
                cm.append([0]*len(self.data.labels))
            for label in list1:
                if label != 'no sample':
                    real_label_index = self.data.labels.index(self.data.dataset_labels[sample_index])
                    predict_label_index = self.data.labels.index(label)
                    cm[real_label_index][predict_label_index] += 1
                sample_index += 1
            cm  = np.array(cm)
            accuracy.append(np.trace(cm) / float(np.sum(cm)))
        print('max: ', round(max(accuracy), 4))
        print('min: ', round(min(accuracy), 4))
    
    def confusion_matrix_crsv(self, prediction):
#        fold = len(prediction)
        sample_index = 0
        
        for list1 in prediction:
            cm = []
            for i in self.data.labels:
                cm.append([0]*len(self.data.labels))
            for label in list1:
                if label != 'no sample':
                    real_label_index = self.data.labels.index(self.data.dataset_labels[sample_index])
                    predict_label_index = self.data.labels.index(label)
                    cm[real_label_index][predict_label_index] += 1
                sample_index += 1
            print(cm)
            plot.confusion_matrix(cm  = np.array(cm),
                          target_names = self.data.labels,
                          normalize = False,
                          title        = "Confusion Matrix, Normalized")
        
        
    # ==============================================================
    def print_tree(self):
        "Print tree to the console."
        print(self.root.to_string())
        
    def to_js(self, filename):
        "Return the tree to a js file."
        string = ''
        string += 'var tree_structure = {\n    chart: {\n        container: "#OrganiseChart6",\n        levelSeparation:    20,\n        siblingSeparation:  15,\n        subTeeSeparation:   15,\n        rootOrientation: "NORTH",\n\n        node: {\n            HTMLclass: "tennis-draw",\n            drawLineThrough: true\n        },\n        connectors: {\n            type: "straight",\n            style: {\n                "stroke-width": 2,\n                "stroke": "#ccc"\n            }\n        }\n    },\n    \n    nodeStructure: '
        string += self.root.to_json()
        string += '};\n'
        with open(filename, 'w') as file:
            file.write(string)
#        print(string)
        
class NotEnoughItemError(Exception):
    """Raised when there is not enough item of list generated from string.

    Attributes:
        next -- attempted new state
        message -- explanation
    """
    def __init__(self, message):
        self.message = message

class DTData:
    def __init__(self, filename):
        self.dataset = []
        self.dataset_labels = []
        self.labels = []
        self.attribute_labels = []
        self.attribute_values = []
        # -------------------------
        self.read(filename)
        
    def read(self, filename):
        """
        Read training dataset and then call __process__().
        --------------------------------------------------------------
        Arguments
        ---------
        fileName:          Filepath of a training file.
        
        File Format (No [] in file)
        -----------
        [number of labels]
        [values of labels],[],...
        [number of attributes]
        [name of attribute1],[number of values],[value1],[value2],...
        [name of attribute2],[number of values],[value1],[value2],...
        or
        [name of continuous attribute],real
        ...
        [number of rows]
        [value of attribute1],[value of attribute2],[],...,[label]
        [value of attribute1],[value of attribute2],[],...,[label]
        ...
        Example
        -------
        2
        Yes,No
        4
        Wind,2,Strong,Weak
        Water,3,Warm,Moderate,Cold
        Air,2,Warm,Cool
        Forecast,3,Sunny,Cloudy,Rainy
        3
        Strong,Warm,Warm,Sunny,Yes
        Weak,Warm,Warm,Sunny,No
        Strong,Warm,Warm,Cloudy,Yes
        
        Usage
        -----
        
        """
        print('Reading from '+filename)
        with open(filename, 'r') as file:
            # read labels
            number_label = int(file.readline())
            self.labels = self.read_list(file.readline(), number_label, ',')
            # read attributes list
            number_attributes = int(file.readline())
            for i in range(number_attributes):
                attributes = self.parse_attribute(file.readline(), ',')
                self.attribute_labels.append(attributes['label'])
                self.attribute_values.append(attributes['value'])
            number_rows = int(file.readline())
            # read rows
            for i in range(number_rows):
                line = file.readline()
                if line:
                    array = self.read_list(line, number_attributes+1, ',')
                    self.dataset.append(array[0:len(array)-1])
                    self.dataset_labels.append(array[len(array)-1])
                
    def read_list(self, string, number, sep):
        if string[len(string)-1] == '\n':
            string = string[0:len(string)-1]
        list1 = string.split(sep)
        if len(list1) < number:
            raise NotEnoughItemError('Cannot generate enough number of item from the string.')
        else:
            return list1[0:number]
    
    def parse_attribute(self, string, sep):
        if string[len(string)-1] == '\n':
            string = string[0:len(string)-1]
        list1 = string.split(sep)
        label = list1[0]
        # number_value = list1[1]
        if list1[1].isdigit(): # continuous attribute
            return {'label': label, 'value': list1[2:len(list1)]}
        else: # categorical attribute
            return {'label': label, 'value': []}    
    
    def label_distribution(self):
        label_count = []
        for label in self.labels:
            label_count.append(self.dataset_labels.count(label))
        plot.bar(self.labels, label_count)
         
if __name__ == '__main__':
    file1 = 'data/Verification/fishing.data' 
    file2 = 'data/Primary Test Cases/contact-lenses.data'
    file3 = 'data/Primary Test Cases/car.data'
    file4 = 'data/Enhancements/iris.data'
    file5 = 'data/Enhancements/car.data'
    file6 = 'data/Enhancements/car_test.data'
    file7 = 'data/Enhancements/car_training.data'
    dt = DecisionTree(DTData(file7))
    
    #======== simgle tree
    dt.generate_tree(prune = 0.70)
#    dt.print_tree()
    testingD = DTData(file6)
    pred = dt.predict(testingD)
    dt.confusion_matrix(pred, testingD)
    
    #======== random forest
#    result = dt.cross_validation(fold = 8, prune = 0.8)
#    print(result['predict'])
#    dt.confusion_matrix_crsv(result['predict'])
#    dt.accuracy_crsv(result['predict'])
    
    # ======= find best K
#    result = dt.cross_validation(fold = 15, prune = 0.8)
#    dt.accuracy_crsv(result['predict'])
        
        
    
    # validate result
#    dtData = DTData(file6)
#    dtData.label_distribution()
    
    
    #======== to json
#    dt.to_js('data.js')
    
    
    

    
    
    

        