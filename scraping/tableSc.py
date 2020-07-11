# -*- coding: utf-8 -*-
from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.implicitly_wait(3)
driver.get('https://www.alimi.or.kr/api/a/vacant/selectApiVacant.do')

productTable = driver.find_element_by_class_name('search_list').find_element_by_tag_name('tbody')
rows = productTable.find_elements_by_tag_name('tr')

for index, value in enumerate(rows):
    if index != 0:
        type = value.find_elements_by_tag_name('td')[1].text.encode('utf-8')
        address = value.find_elements_by_tag_name('td')[2].text.encode('utf-8')
        pay = value.find_elements_by_tag_name('td')[3].text.encode('utf-8')
        size = value.find_elements_by_tag_name('td')[4].text.encode('utf-8')
        jimk = value.find_elements_by_tag_name('td')[5].text.encode('utf-8')
        print(type, address, pay, size, jimk)
