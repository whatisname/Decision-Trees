# -*- coding: utf-8 -*-
"""
Created on Sat Mar  2 21:20:16 2019

@author: XX
"""

import math

class DTNode:
    def __init__(self, data, sample_array, attributes_to_analysis, prune = 1.0, splitby = 'infogain'):
        self.id = 0
        self.children = []
        self.sample_array = sample_array
        self.attributes_to_analysis = attributes_to_analysis
        self.data = data
        # -------------------
        self.splitby = splitby
        self.information_gain = 0.0
        self.gini = 0.0
        self.best_split_attribute_index = 0
        self.best_split = [] # sample index split
        self.best_split_attribute = [] # best split of attribute 
                                    # (if categorical, it has multiple values; 
                                    # if continuous, it has one numeric value)
        # -------------------
        self.label = ''
        # -------------------
        self.label_count = [] #
        self.prune = prune # most of the sample matches prune, mark as leaf
        self.__count_sample__()
    
    # ===============================================================================
    def entropy(self, dataset_array):
        total = len(dataset_array)
        count = []
        # counting
        for label_index, label in enumerate(self.data.labels):
            count.append(0)
        for sample_index in dataset_array:
            count[self.data.labels.index(self.data.dataset_labels[sample_index])] += 1
        ent = 0.0
        for i in count:
            if i != 0:
                ent += -1*i/total*math.log2(i/total)
        return ent
    
    def gini(self, sample_array):
        pass
    
    def infogain(self, attribute_index):
        gain = 0.0
        # 1.entire entropy
        entropy_total = self.entropy(self.sample_array)
        # 2.entropy of every attribute
        # count sample index of each attribute
        sample_arrays = []
        sample_count = []
        total_count = 0
        for attribute_value in self.data.attribute_values[attribute_index]:
            sample_arrays.append([])
            sample_count.append(0)
        for sample_index in self.sample_array:
            # find attribute in dataset
            attribute_value = self.data.dataset[sample_index][attribute_index]
            # find the index position of this attribute
            index_in_sample_array = self.data.attribute_values[attribute_index].index(attribute_value)
            # add this row index to each sample_arrays
            sample_arrays[index_in_sample_array].append(sample_index)
            sample_count[index_in_sample_array] += 1
            total_count += 1
        entropy_list = []
        for array in sample_arrays:
            entropy_list.append(self.entropy(array))
        # 3.caculate info gain
        gain = entropy_total
        for ent_index, ent in enumerate(entropy_list):
            gain -= (sample_count[ent_index]/total_count)*ent
#        print('sample_arrays-infogain: ', sample_arrays)
        return {'gain': gain, 'sample_list': sample_arrays}
    
    def infogain_continuous(self, sorted_sample_array, threshold_index):
        gain = 0.0
        # 1.entire entropy
        entropy_total = self.entropy(self.sample_array)
        # 2. entropy of [before]
        # 3. entropy of [threshold_index + after threshold_index]
        # count sample index of each attribute
        sample_arrays = []
        sample_arrays.append(sorted_sample_array[0:threshold_index])
        sample_arrays.append(sorted_sample_array[threshold_index:len(sorted_sample_array)])
        total_count = len(sorted_sample_array)
        sample_count = []
        entropy_list = []
        for array in sample_arrays:
            entropy_list.append(self.entropy(array))
            sample_count.append(len(array)) 
        # 3.caculate info gain
        gain = entropy_total
        for ent_index, ent in enumerate(entropy_list):
            gain -= (sample_count[ent_index]/total_count)*ent
        return {'gain': gain, 'sample_list': sample_arrays}
    
    def sort_sample(self, attribute_index):
        _sample_array = []
        for sample_index in self.sample_array:
            is_inserted = False
            for index, _sample_index in enumerate(_sample_array):
                if self.data.dataset[_sample_index][attribute_index] > self.data.dataset[sample_index][attribute_index]:
                    _sample_array.insert(index, sample_index)
#                    print(self.data.dataset[sample_index][attribute_index], ',', self.data.dataset[_sample_array[len(_sample_array)-1]][attribute_index])
                    is_inserted = True
                    break
            if is_inserted == False:
#                if len(_sample_array) > 0:
#                    print(self.data.dataset[sample_index][attribute_index], ',', self.data.dataset[_sample_array[len(_sample_array)-1]][attribute_index])
                _sample_array.insert(len(_sample_array), sample_index)
        return _sample_array
    
    def __count_sample__(self):
        label_count = []
        for label in self.data.labels:
            label_count.append(0)
        for sample_index in self.sample_array:
            label_count[self.data.labels.index(self.data.dataset_labels[sample_index])] += 1
        self.label_count = label_count
        
    def is_leaf(self):
        "Decide if this node is a leaf"
        # if there is only one label has count
        if self.label_count.count(0) == len(self.label_count) - 1:
            return True
        else:
            # if ratio of max sample > prune, this is a leaf
            if max(self.label_count)/sum(self.label_count) >= self.prune:
                return True
            else:
                return False
    
    # ===============================================================================
    def split(self):
        # 1. first check if sample is empty
        if len(self.sample_array) == 0:
            self.label = 'no sample'
            return
        # 2. check if it is leaf
        if self.is_leaf():
            self.label = self.data.labels[self.label_count.index(max(self.label_count))]
#            self.label = self.data.dataset_labels[self.sample_array[0]]
            return
        # if no attributes_to_analysis, it is a leaf
        # TODO
        if len(self.attributes_to_analysis) == 0:
#            self.label = self.data.labels[label_count.index(max(label_count))]
            self.label = 'no attribute to analysis, but there are mutiple labels'
            return
        # split
        if self.splitby == 'infogain':
            # caculate infogain of every attribute, select the biggest gain
            for attribute_index in self.attributes_to_analysis:
                if len(self.data.attribute_values[attribute_index]) == 0: # continuous attribute
                    # sort sample
                    sorted_sample_array = self.sort_sample(attribute_index)
                    # caculate info gain for each threshold
                    for index in range(1,len(sorted_sample_array)): 
                        # label not same
                        if self.data.dataset_labels[sorted_sample_array[index-1]] !=  self.data.dataset_labels[sorted_sample_array[index]]:
                            threshold = (float(self.data.dataset[index-1][attribute_index])+float(self.data.dataset[index][attribute_index]))/2
                            gain = self.infogain_continuous(sorted_sample_array, index)
                            if self.information_gain < gain['gain']:
                                # current best info gain
                                self.information_gain = gain['gain']
                                # current best split sample sets
                                self.best_split = gain['sample_list']
                                # current best split attribute
                                self.best_split_attribute_index = attribute_index
                                self.best_split_attribute = [threshold]
                else: # categorital attribute
                    gain = self.infogain(attribute_index)
                    if self.information_gain < gain['gain']:
                        # current best info gain
                        self.information_gain = gain['gain']
                        # current best split sample sets
                        self.best_split = gain['sample_list']
                        # current best split attribute
                        self.best_split_attribute_index = attribute_index
                        self.best_split_attribute = self.data.attribute_values[attribute_index]
            # remove best attribute from self.attributes_to_analysis
            _attributes_to_analysis = self.attributes_to_analysis[:self.best_split_attribute_index] + self.attributes_to_analysis[self.best_split_attribute_index+1:]
            # generate children nodes
#            print(self.to_string())
#            print('_attributes_to_analysis', _attributes_to_analysis)
            for sub_list in self.best_split:
                node = DTNode(data = self.data,
                           sample_array = sub_list, 
                           attributes_to_analysis = _attributes_to_analysis, 
                           prune = self.prune,
                           splitby = self.splitby)
                self.children.append(node)
            for node in self.children: 
                node.split()
        elif self.splitby == 'gini':
            pass
    
    # ===============================================================================    
    def predict(self, sample):
        if self.label == 'no sample':
            return 'no sample'
        if len(sample) != len(self.data.attribute_labels):
            return 'no sample'
        if len(self.label) != 0:
            return self.label
        elif len(self.best_split_attribute) == 1: 
            if float(sample[self.best_split_attribute_index]) <= float(self.best_split_attribute[0]):
                # if return 'no sample', set label to majority label
                string = self.children[0].predict(sample)
                if string == 'no sample':
                    string = self.data.labels[self.label_count.index(max(self.label_count))]
                return string
            else:
                string = self.children[1].predict(sample)
                if string == 'no sample':
                    string = self.data.labels[self.label_count.index(max(self.label_count))]
                return string
        elif len(self.best_split_attribute) > 1:
            for attribute_value_index, attribute_value in enumerate(self.best_split_attribute):
                if sample[self.best_split_attribute_index] == attribute_value:
                    string = self.children[attribute_value_index].predict(sample)
                    if string == 'no sample':
                        string = self.data.labels[self.label_count.index(max(self.label_count))]
                    return string
            return 'no sample'
        else:
            return 'no sample'
    
    # ===============================================================================
    def rule_str(self):
        "Split rule"
        if len(self.best_split_attribute) == 1:
            return 'threshold:' + str(self.best_split_attribute)
        else:
            return str(self.best_split_attribute)
    
    def sample_array_str(self):
        string = '['
        for sample_index in self.sample_array:
            string += str(sample_index) +'-'+ self.data.dataset_labels[sample_index]+','
        string += ']'
        return string
#        return str(list(self.sample_array))            
    
    def to_string(self):
        string = ''
        if len(self.label) != 0:
            string += 'leaf[' + self.label + '], '
            string += 'sample[' + str(len(self.sample_array)) 
#            string += ': '+ self.sample_array_str() 
            string += ']'
            string += '\n'
        else:
            string += 'split by[' + self.data.attribute_labels[self.best_split_attribute_index] + '], '
            string += 'infogain[' + str(round(self.information_gain, 3)) + '], '
            string += 'rule[' + self.rule_str() + '], '
            string += 'sample[' + str(len(self.sample_array)) 
#            string += ': '+self.sample_array_str()
            string += ']'
            string +=' \n'
        for node in self.children:
            string += node.to_string()
        return string
    
    def to_desc(self):
        string = ''
        if len(self.label) != 0:
            string += 'leaf[' + self.label + '], '
            string += 'sample[' + str(len(self.sample_array)) 
#            string += ': '+ self.sample_array_str() 
            string += ']'
        else:
            string += 'split by[' + self.data.attribute_labels[self.best_split_attribute_index] + '], '
            string += 'infogain[' + str(round(self.information_gain, 3)) + '], '
            string += self.rule_str() + ', '
            string += 'sample[' + str(len(self.sample_array)) 
#            string += ': '+self.sample_array_str()
            string += ']'
        return string
    
    def to_json(self):
        string = '{\n'
        string += 'text: {\n'
        if len(self.label) == 0:
            string += 'name: "' + 'node' + '",\n'
        else:
            string += 'name: "' + 'leaf' + '",\n'
        string += 'desc: "' + self.to_desc() + '",\n'
#        string += 'title: "' + 'node' + '",\n'
        string += '},\n'
        # string += 'HTMLclass: "",\n'
        string += 'children: [\n'
        for node in self.children:
            string += node.to_json()
        string += ']\n'
        string += '},\n'
        return string

if __name__ == '__main__':
    pass
