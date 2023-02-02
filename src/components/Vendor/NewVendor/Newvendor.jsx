
import React, { useContext} from 'react'
import  { UserContext } from '../../../Context/UseContext';
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {MyTextInput,MySelect,validationSchema} from '../../../components/InputTypes'

// And now we can use these
const Newvendor = () => {

  const {Newvendors} = useContext(UserContext);

  const inputTextAtributes = [{
    'id': 1,
    'label' : 'Full Name',
    'name' : 'fullName',
    'type' : 'text'
  },{
    'id': 2,
    'label' : 'E-mail',
    'name' : 'Email',
    'type' : 'email'
  },{
    'id': 3,
    'label' : 'Mobile Number',
    'name' : 'number',
    'type' : 'tel'
  },{
    'id': 4,
    'label' : 'Vendor Eligibility',
    'name' : 'venEligible',
    'type' : 'text'
  },{
    'id': 5,
    'label' : 'GST Number',
    'name' : 'Gst',
    'type' : 'text'
  },
  {
    'id': 6,
    'label' : 'Contact Person',
    'name' : 'Contactperson',
    'type' : 'text'
  },
  {
    'id': 7,
    'label' : 'Technology',
    'name' : 'Technology',
    'type' : 'text'
  },{
    'id': 8,
    'label' : 'Payment Cycle Period',
    'name' : 'Paycycle',
    'type' : 'text'
  },
  {
    'id': 9,
    'label' : 'CIN Number',
    'name' : 'Cin',
    'type' : 'text'
  }
  
  ]

  const inputDropAtributes = [{
    'id': 1,
    'label' : 'NDA Signed',
    'name' : 'Ndasign',
    'values' : [{
                  'id': 11,
                  'value': 'Yes',
                  'placehoder':'Yes'
                },
                {
                  'id': 12,
                  'value': 'No',
                  'placehoder':'No'
                },
                {
                  'id': 13,
                  'value': 'Pending',
                  'placehoder':'Pending'
                }]
  }]

  const submitData = async(venData) =>{
    const res = await Newvendors(venData);
    if (res.status === 201) {
      toast.success("Vendor added Successfully 😃!", {
          position: "top-center"
      });
      //Formik.resetForm();
      //console.log(initialValues);
      return 'ss'
  }else{
    toast.error("Something went wrong", {
      position: "top-center"
  });
  }
  }


  return (
    <>
      <h1>Add new vendor</h1>
      <div className='newVendor'>
      <Formik
        initialValues={{
          fullName:'',
          Email:'',
          number:'',
          venEligible:'',
          Gst: '',
          Contactperson:'',
          Technology:'',
          Paycycle:'',
          Cin:'',
          Ndasign:'',
        }}
        validationSchema= {validationSchema}
        onSubmit={(values, { resetForm }) => {
          submitData(values);
          resetForm();
        }}
      >
        <Form>
        <div className='row'>

            {inputTextAtributes.map((val)=>(
              <div className='col-6' key={val.id}>
                <MyTextInput
              
              {...val}
            />
              </div>
            ))}

{inputDropAtributes.map((val)=>(
  <div className='col-6' key={val.id}>
              <MySelect
              
              {...val}

            >

            </MySelect>
            </div>
            ))}
          
        </div>

          <div className='mt-5'>
          <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
      </div>
    </>
  );
};

export default Newvendor