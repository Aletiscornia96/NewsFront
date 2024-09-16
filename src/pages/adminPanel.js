import React, { useState } from 'react';
import axios from 'axios';

function AdminPanel() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [mainImage, setMainImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('mainImage', mainImage);

        try {
            const token = localStorage.getItem('token');
           
