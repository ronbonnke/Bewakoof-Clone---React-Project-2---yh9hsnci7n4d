import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchBestSellers = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products', {
        method: 'GET',
        headers: {
          'projectId': 'ntymfpzixzjc',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch best sellers');
      }

      const data = await response.json();
      setClothes(data);
      setForInput(data.data);
    } catch (error) {
      console.error('Error fetching best sellers:', error.message);
    }
  };