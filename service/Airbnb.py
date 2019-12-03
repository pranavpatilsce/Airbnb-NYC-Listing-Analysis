#!/usr/bin/env python
# coding: utf-8

# In[2]:

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from sklearn.linear_model import LinearRegression
from sklearn.impute import SimpleImputer
import matplotlib.pyplot as plt
listings = pd.read_csv("./listings_cleaned_two_initial.csv")
listings = listings.replace(to_replace = 't',value = 1).replace(to_replace = 'f',value = 0)
listings = listings.fillna(1)

# print(listings.head())

nan_rows = listings[listings['host_identity_verified'].isna()]
print(nan_rows)

X = listings.iloc[:,[1,2,3,5]].values
y = listings.iloc[:,7].values

# print(X)
encoder = LabelEncoder()
X[:,3] = encoder.fit_transform(X[:,3])
X[:,2] = encoder.fit_transform(X[:,2])



print(X)
# onehotencoder = OneHotEncoder(categorical_features = [1])
# # Xt = X.reshape(-1,1)
# # print(Xt.shape)
# # print(X)
# Xt = onehotencoder.fit_transform(X).toarray()
# print(Xt)
# print(Xt.shape)


# In[3]:


x_train,x_test,y_train,y_test = train_test_split(X, y, test_size = 1/3, random_state = 0)
print((x_train))
print(x_train.shape)
print(y_train.shape)

# xt = x_train.reshape(-1,1)
# yt = y_train.reshape(-1,1)

print(x_train.shape)
print(y_train.shape)
reg = LinearRegression()
reg.fit(x_train,y_train)
print(reg)


# In[25]:


# x_train = x_train.reshape(-1,1)
# y_train = y_train.reshape(-1,1)
# print(xscore)
print(x_train.shape)
print(y_train.shape)
X = encoder.fit_transform(["Harlem"])
print(X)
pred = reg.predict(x_test)
print(pred)
print(x_train)
# print(pred)


# In[5]:


# print(len(xt))
# print(len(xscore))
# plt.scatter(x_train,y_train,color = 'red')
plt.plot(x_test,reg.predict(x_test),color = 'blue')
plt.show()


# In[48]:


ament = listings.iloc[:,6].values
ament

# ament.shape


# In[44]:

print("Training Random trees")
ament = ament.reshape(-1,1)
encoded_ament = ament
encoded_ament[:,0] = encoder.fit_transform(ament[:,0])
print("Encoded Amenities:")
print(encoded_ament)
print(ament)

# ament = ament.reshape(-1,1)
# ament[:,0] = encoder.fit_transform(ament[:,0])
# ament


# In[20]:


from sklearn.ensemble import RandomForestRegressor
regressor = RandomForestRegressor(n_estimators = 10, random_state = 0)
regressor.fit(ament,y)


# In[28]:


y_pred = regressor.predict([[346],[7495],[3140]])
y_pred
y_mean = np.mean(y_pred)
y_mean
#Above, entering amenities into decision tree and getting the price.

# In[57]:


amenity = listings.iloc[:,6]
amenity
#with pd.option_context('display.max_rows',None,'display.max_columns',None):
#    print(amenity)


# In[50]:


topAmenities = pd.read_csv("top_amenities.csv")
print(topAmenities)


# In[53]:


#amenity = topAmenities.iloc[:,1].values
#amenity


# In[55]:


#amenity = amenity.reshape(-1,1)
#amenity[:,0] = encoder.fit_transform(amenity[:,0])
#amenity


# In[ ]:
