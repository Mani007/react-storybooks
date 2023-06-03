import React from "react";
import Buttons from '../buttons/Buttons';
import Subs from '../input/Subs';

export default {
    title: 'Form/Subscription'
    }

export const PrimarySubs = ()=>(
    <>
    <Subs/>
    <Buttons tailwind = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='submit'>DEFAULT</Buttons>
    </>
)