#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

from math import sqrt
from sklearn.metrics import mean_squared_error

pd.set_option('display.max_columns',None)
pd.set_option('display.max_rows',None)


# def extract_list_val(s):
#     for c in ['{''}''"']:
#         s=s.replace(c,'')
#     for c in ['/'':',' ','-','.','&',')','(','\'']:
#         s=s.replace(c,'_')
#     s=s.replace('matress','mattress')
#     return s.split(',')

listings = pd.read_csv("listings_cleaned_two_lastminute_initial.csv")
listings = listings.replace(to_replace = 't',value = 1).replace(to_replace = 'f',value = 0)
listings = listings.fillna(1)

nan_rows = listings[listings['host_identity_verified'].isna()]
print(nan_rows)

listings2 = listings.iloc[:,3]
data_dict = listings2.to_dict('index')
print("printing data")
print(data_dict)


X = listings.iloc[:,:9].values
y = listings.iloc[:,9].values

print(X)
encoder = LabelEncoder()
X[:,3] = encoder.fit_transform(X[:,3])
X[:,4] = encoder.fit_transform(X[:,4])
X[:,5] = encoder.fit_transform(X[:,5])
X[:,8] = encoder.fit_transform(X[:,8])
# pred_test = encoder.inverse_transform(X)
print("Encoded values")
print(X)

# onehotencoder = OneHotEncoder(categorical_features = [1])
# # Xt = X.reshape(-1,1)
# # print(Xt.shape)
# # print(X)
# Xt = onehotencoder.fit_transform(X).toarray()
# print(Xt)
# print(Xt.shape)


# In[ ]:


x_train,x_test,y_train,y_test = train_test_split(X, y, test_size = 1/5, random_state = 0)
print("split")
print((x_train))
print("x_train")
print(x_train.shape)
print("x_train shape")
print(y_train.shape)
print("y_train shape")

print(x_test)
print("x_test print above")

# xt = x_train.reshape(-1,1)
# yt = y_train.reshape(-1,1)
# print(x_train.shape)
# print("Encoded values")
# print(y_train.shape)
# print("Encoded values")

reg = LinearRegression()
print("reg done")
reg.fit(x_train,y_train)
print("reg fit")
print(reg)


# In[ ]:


#x_train = x_train.reshape(-1,1)
#y_train = y_train.reshape(-1,1)
# print(xscore)
print(x_train.shape)
print(y_train.shape)
pred = reg.predict(x_test)
print(pred)
# print(x_train)
# print(pred)


# In[22]:

rms = sqrt(mean_squared_error(y_test, pred))
print("RMSE:", rms)
# print(len(xt))
# print(len(xscore))
#plt.scatter(x_train,y_train,color = 'red')
plt.plot(x_test,reg.predict(x_test),color = 'blue')
plt.show()


# In[14]:


ament = listings.iloc[:,7].values
ament
# ament.shape


# In[16]:


ament = ament.reshape(-1,1)
#encoded_ament = ament
ament[:,0] = encoder.fit_transform(ament[:,0])
#print(encoded_ament)
print(ament)


# In[17]:


x_train,x_test,y_train,y_test = train_test_split(ament, y, test_size = 1/3, random_state = 0)


# In[19]:


# from sklearn.ensemble import RandomForestRegressor
# regressor = RandomForestRegressor(n_estimators = 10, random_state = 0)
# regressor.fit(x_train,y_train)


# In[21]:


# y_pred = regressor.predict([[10889],[6075],[18002],[27255],[16096]])

# 10889
# 6075
# 18002
# 37023
# 27255
# 15388
# 16096
# 7287
# 40068
#  4944
#  9414
# 37347
#  6912
#  2760
# 37384
# 17611
# 15098
# 1777

# y_pred
# y_mean = np.mean(y_pred)
# y_mean


# In[13]:


import pickle
#s = pickle.dumps(clf)
#clf2 = pickle.loads(s)
#clf2.predict(X[0:1])
