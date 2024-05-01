import {useState, useEffect} from "react";
import {useFormik} from "formik";
import * as yup from "yup"
import lines from "../assets/lines.png"
import lines2 from "../assets/lines2.png"
import mut from "../assets/mut.png"
import '../App.css'


export const MyForm = () => {
    const [countries, setCountries] = useState([]);
    const url = "https://restcountries.com/v2/all";
    const phoneRegExp = /^(?:\+0{0,2}|0{0,2})[- .]?\d{3,12}$/;
    const allowedCharactersRegex = /^[0-9+\-()]+$/;
    const websiteRegExp = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9\-_]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?$/;
    function handleInputChange(e) {
        const { value, name } = e.target;
        if (value === '' || allowedCharactersRegex.test(value)) {
            formik.setFieldValue(name, value);
            console.log(formik.values)
            console.log(formik.errors)
        } else {
            e.preventDefault();
        }
    }




    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);
    const genders = [
        "Female",
        "Male",
        "Non-binary",
        "Transgender",
        "Intersex",
        "I will inform you later",
        "I prefer not to say",
    ]
    const validationSchema = yup.object().shape({
        fullName: yup.string().required("Full Name is required"),
        email: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
        country: yup.string().required("Country is required").notOneOf(['default'], 'Selecting a country is required'),
        postCode: yup.number().required("Post Code is required").typeError("This is not a number"),
        nameOfAgency: yup.string().required("NOA is required"),
        addressOfAgency: yup.string().required("Agency Address is required"),
        streetBuildingNumber: yup.string().required("Street Address is required"),
        city: yup.string().required("City is required"),
        stateOrCounty: yup.string().required("State or County is required"),
        agencyPhoneNumber: yup
            .string()
            .required("Agency Phone Number is required")
            .matches(phoneRegExp, 'Please enter a valid Phone Number'),
        agencyWebsite: yup
            .string()
            .url("Invalid format example: https://www.example.com")
            .matches(websiteRegExp, 'Please enter a valid url'),
        genders: yup
            .string()
            .notOneOf(['default'], 'Selecting a gender is required')
            .required("Please select at least one Gender option"),
        DOA: yup.date()
            .required('Date is required')
            .min(new Date('2024-01-01'), 'Date must be after January 1, 2024'),
        DOD: yup.date()
            .required('Date is required')
            .min(new Date('2024-01-01'), 'Date must be after January 1, 2024'),
        phoneNumber: yup
            .string().required('Phone number is required').matches(phoneRegExp, 'Please enter a valid Phone Number')
    });


    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            country: "",
            nameOfAgency: "",
            addressOfAgency: "",
            streetBuildingNumber: "",
            city: "",
            stateOrCounty: "",
            agencyPhoneNumber: "",
            agencyManagersName: "",
            agencyWebsite: "",
            genders: "",
            meetings: "",
            agencyTurnover: "",
            postCode: "",
            phoneNumber: "",
            DOA: null,
            DOD: null,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log("Submitted")
        },

    });

    return (

        <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center justify-around bg-neutral opacity-85 mb-7"
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={mut} className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center text-2xl pt-3 gradient-text">
                    Personal Information
                </h1>
                <img src={lines} style={{width: 'auto', height: '100px'}}/>
                <div className="PersonalInfo flex flex-col lg:flex-row md:flex-row ">
                    <div className="flex flex-col justify-around items-center m-5">
                        <label className="input input-primary input-bordered flex gap-2 items-center my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="w-4 h-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </label>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-error">{formik.errors.email}</div>
                        ) : null}
                        <label className="input input-primary input-bordered flex items-center gap-2 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="w-4 h-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                placeholder="Full Name"
                                id="fullName"
                                name="fullName"
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                            />
                        </label>
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <div className="text-error">{formik.errors.fullName}</div>
                        ) : null}
                    </div>
                    <div className="flex flex-col justify-around items-center m-5">
                        <label className="flex items-center my-2">
                            <select
                                id="genders"
                                name="genders"
                                onChange={formik.handleChange}
                                value={formik.values.genders}
                                placeholder="Select Gender"
                                className="select select-primary"
                            >
                                <option value="default">
                                    Select Your Gender
                                </option>
                                {countries.length > 0 ? (
                                    genders.map((gender) => (
                                        <option key={gender} value={gender}>
                                            {gender}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">Loading Holidays...</option>
                                )}
                            </select>
                        </label>
                        {formik.touched.genders && formik.errors.genders ? (
                            <div className="text-error">{formik.errors.genders}</div>
                        ) : null}
                        <label className="input input-primary input-bordered flex items-center gap-2 my-2">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Phone Number"
                                id="phoneNumber"
                                name="phoneNumber"
                                onChange={handleInputChange}
                                value={formik.values.phoneNumber}
                            />
                        </label>
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <div className="text-error">{formik.errors.phoneNumber}</div>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center text-2xl p-3 gradient-text">
                    Address
                </h1>
                <div className="addressForm flex flex-col justify-around items-center">
                    <label className="flex items-center my-2">
                        <select
                            id="country"
                            name="country"
                            onChange={formik.handleChange}
                            value={formik.values.country}
                            // Add a placeholder for better UX
                            placeholder="Select Your nationality"
                            className="select select-primary w-full lg:w-auto md:w-auto mx-4 "
                        >
                            <option value="default">
                                Select Your Nationality
                            </option>
                            {countries.length > 0 ? (
                                countries.map((country) => (
                                    <option key={country.name} value={country.name}>
                                        {country.name}
                                    </option>
                                ))
                            ) : (
                                <option value="">Loading countries...</option>
                            )}
                        </select>
                    </label>
                    {formik.touched.country && formik.errors.country ? (
                        <div className="text-error">{formik.errors.country}</div>
                    ) : null}
                    <div className="flex flex-col lg:flex-row md:flex-row">

                        <div className="flex flex-col justify-around items-center m-5">
                            <label className="input input-bordered flex items-center input-primary my-2">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="City"
                                    id="city"
                                    name="city"
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                />

                            </label>
                            {formik.touched.city && formik.errors.city ? (
                                <div className="text-error">{formik.errors.city}</div>
                            ) : null}
                            <label className="input input-bordered flex items-center input-primary my-2">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="State or County"
                                    id="stateOrCounty"
                                    name="stateOrCounty"
                                    onChange={formik.handleChange}
                                    value={formik.values.stateOrCounty}
                                />

                            </label>
                            {formik.touched.stateOrCounty && formik.errors.stateOrCounty ? (
                                <div className="text-error">{formik.errors.stateOrCounty}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col justify-around items-center m-5">
                            <label className="input input-bordered flex items-center input-primary my-2">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Post Code"
                                    id="postCode"
                                    name="postCode"
                                    onChange={formik.handleChange}
                                    value={formik.values.postCode}
                                />
                            </label>
                            {formik.touched.postCode && formik.errors.postCode ? (
                                <div className="text-error">{formik.errors.postCode}</div>
                            ) : null}
                            <label className="input input-bordered flex items-center input-primary my-2">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Street building number"
                                    id="streetBuildingNumber"
                                    name="streetBuildingNumber"
                                    onChange={formik.handleChange}
                                    value={formik.values.streetBuildingNumber}
                                />

                            </label>
                            {formik.touched.streetBuildingNumber && formik.errors.streetBuildingNumber ? (
                                <div className="text-error">{formik.errors.streetBuildingNumber}</div>
                            ) : null}
                        </div>
                        <div className=" flex flex-col justify-around items-center m-5">
                            <label className="input input-bordered flex flex-col items-center input-primary my-2">
                                <h1 className="text-md opacity-55 ">
                                    When will you be coming
                                </h1>
                                <input
                                    type="date"
                                    className="grow"
                                    placeholder="Date of arrival"
                                    id="DOA"
                                    name="DOA"
                                    onChange={formik.handleChange}
                                    value={formik.values.DOA}
                                />

                            </label>
                            {formik.touched.DOA && formik.errors.DOA ? (
                                <div className="text-error">{formik.errors.DOA}</div>
                            ) : null}
                            <label className="input input-bordered flex flex-col items-center input-primary my-2">
                                <h1 className="text-md opacity-55 ">
                                    When will you be coming
                                </h1>
                                <input
                                    type="date"
                                    className="grow"
                                    placeholder="Date of Leaving"
                                    id="DOD"
                                    name="DOD"
                                    onChange={formik.handleChange}
                                    value={formik.values.DOA}
                                />

                            </label>
                            {formik.touched.DOD && formik.errors.DOD ? (
                                <div className="text-error">{formik.errors.DOD}</div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-center text-2xl p-3 gradient-text">
                    Agency or Association
                </h1>
                <div className="agencyForm flex flex-col justify-around items-center ">
                    <div className="flex flex-col lg:flex-row md:flex-row">
                        <div className=" flex flex-col items-center justify-around m-5">
                            <label className="input input-bordered flex items-center m-2 input-primary">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Name of Agency"
                                    id="nameOfAgency"
                                    name="nameOfAgency"
                                    onChange={formik.handleChange}
                                    value={formik.values.nameOfAgency}
                                />
                            </label>
                            {formik.touched.nameOfAgency && formik.errors.nameOfAgency ? (
                                <div className="text-error">{formik.errors.nameOfAgency}</div>
                            ) : null}
                            <label className="input input-bordered flex items-center m-2 input-primary">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Address of Agency"
                                    id="addressOfAgency"
                                    name="addressOfAgency"
                                    onChange={formik.handleChange}
                                    value={formik.values.addressOfAgency}
                                />
                            </label>
                            {formik.touched.addressOfAgency && formik.errors.addressOfAgency ? (
                                <div className="text-error">{formik.errors.addressOfAgency}</div>
                            ) : null}
                        </div>
                        <div className=" flex flex-col items-center justify-around m-5">
                            <label className="input input-bordered flex items-center m-2 input-primary">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Agency Phone Number"
                                    id="agencyPhoneNumber"
                                    name="agencyPhoneNumber"
                                    onChange={handleInputChange}
                                    value={formik.values.agencyPhoneNumber}
                                />
                            </label>
                            {formik.touched.agencyPhoneNumber && formik.errors.agencyPhoneNumber ? (
                                <div className="text-error">{formik.errors.agencyPhoneNumber}</div>
                            ) : null}
                            <label className="input input-bordered flex items-center m-2 input-primary">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Agency Website"
                                    id="agencyWebsite"
                                    name="agencyWebsite"
                                    onChange={formik.handleChange}
                                    value={formik.values.agencyWebsite}
                                />
                            </label>
                            {formik.touched.agencyWebsite && formik.errors.agencyWebsite ? (
                                <div className="text-error">{formik.errors.agencyWebsite}</div>
                            ) : null}
                        </div>
                    </div>

                </div>
            </div>
            <button className="btn btn-secondary text-neutral mt-3" type="submit"
                    disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <img src={lines2} style={{width: 'auto', height: '100px'}}/>
        </form>
    )
}