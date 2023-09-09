"ue client"
import React, { useState } from 'react';
import Rattingstars from '@/Components/Product/Rattingstars';
import styles from '../styles/productreview.module.css';
import { toast } from 'react-toastify';
import validator from 'validator'
import axios from 'axios';
function NewReview({ id }) {
    // Define a single state object with properties for each field
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        review: '',
        name: '',
        email: '',
        star: 0,
    });

    // Destructure the properties from the state object
    const { review, name, email, star } = formData;

    // Event handler for the form fields
    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Event handler for the star stars
    const handlestarChange = (newstar) => {
        console.log(newstar);
        setFormData({
            ...formData,
            star: newstar,
        });
    };

    // Handle submission of the review form
    const handleSubmit = () => {
        // Validate the form data
        const errors = {};

        // Validate the review field
        if (!review.trim()) {
            errors.review = 'Review is required';
        }

        // Validate the name field (optional)
        if (!name.trim()) {
            errors.name = 'Name is required';
        }

        // Validate the email field (optional)
        if (!validator.isEmail(email)) {
            errors.email = 'Invalid email address';
        }

        // Validate the star field (optional)
        if (star === 0) {
            errors.star = 'Rating is required';
        }

        // Check if there are any validation errors
        if (Object.keys(errors).length === 0) {

            // Make a POST request using Axios
            setLoading(true)
            axios
                .post('/api/product/review/' + id, formData)
                .then((response) => {
                    setLoading(false)

                    if (response.data.add == true) {
                        toast.success("Your Review Added");
                        setFormData({
                            review: '',
                            name: '',
                            email: '',
                            star: 0,
                        })
                    } else {
                        toast.error("Sumthing Error");
                    }
                })
                .catch((error) => {
                    setLoading(false)

                    // Handle errors, e.g., show an error message
                    console.error('Error submitting review:', error);
                    toast.error("Sumthing Error");
                });

        } else {
            // Validation errors exist, handle them (e.g., display error messages using toast)
            Object.values(errors).forEach((error) => {
                toast.error(error); // Show error messages as toasts
            });
        }
    };

    return (
        <div className={styles.reviewform}>
            <h3 className={styles.formtitle}> Add a Review </h3>
            <p className={styles.formdesc}>
                Your email address will not be published. Required fields are marked *
            </p>

            <Rattingstars readonly={false} iconsize={22} rating={star} onchange={handlestarChange} />
            <div className="inpbox">
                <label>Your Review *</label>
                <textarea
                    className={`input ${styles.reviewareainput}`}
                    placeholder="Write A Review"
                    name="review"
                    value={review}
                    onChange={handleFieldChange}
                ></textarea>
            </div>
            <div className={styles.towrow}>
                <div className="inpbox">
                    <label>Your Name</label>
                    <input
                        className="input"
                        name="name"
                        value={name}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className="inpbox">
                    <label>Email ID</label>
                    <input
                        className="input"
                        name="email"
                        value={email}
                        onChange={handleFieldChange}
                    />
                </div>
            </div>
            <button className="primarybtnactive" style={{ marginTop: 15 }} onClick={handleSubmit} disabled={loading}>
                {loading ? "Loading..." : "Add Your Review"}
            </button>
        </div>
    );
}

export default NewReview;
