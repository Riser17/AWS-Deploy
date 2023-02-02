
import React, { useContext} from 'react'
import  { UserContext } from '../../Context/UseContext';
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {MyTextInput,MySelect,validationSchemaResource} from '../../components/InputTypes'

// And now we can use these
const NewResource = () => {

  const {addResource} = useContext(UserContext);

  const inputTextAtributes = [{
    'id': 1,
    'label' : 'Full Name',
    'name' : 'fullname',
    'type' : 'text'
  },{
    'id': 2,
    'label' : 'E-mail',
    'name' : 'email',
    'type' : 'email'
  },{
    'id': 3,
    'label' : 'Mobile Number',
    'name' : 'phone',
    'type' : 'tel'
  },{
    'id': 4,
    'label' : 'Tech. Profile',
    'name' : 'techprofile',
    'type' : 'text'
  },{
    'id': 5,
    'label' : 'Skill Set',
    'name' : 'skillset',
    'type' : 'text'
  },
  {
    'id': 6,
    'label' : 'Total Experience',
    'name' : 'totalexpr',
    'type' : 'text'
  },
  {
    'id': 7,
    'label' : 'Relevant Experience',
    'name' : 'relevantexpr',
    'type' : 'text'
  },{
    'id': 8,
    'label' : 'Current CTC',
    'name' : 'currentctc',
    'type' : 'text'
  },
  {
    'id': 9,
    'label' : 'Expected CTC',
    'name' : 'expectedctc',
    'type' : 'text'
  },
  {
    'id': 10,
    'label' : 'Availability-to-Join',
    'name' : 'availjoin',
    'type' : 'text'
  },
  {
    'id': 11,
    'label' : 'Notice Period',
    'name' : 'noticeperiod',
    'type' : 'text'
  },
  {
    'id': 12,
    'label' : 'System Configuration',
    'name' : 'systmconfig',
    'type' : 'text'
  },
  {
    'id': 13,
    'label' : 'Preferred Location',
    'name' : 'prefrdlocation',
    'type' : 'text'
  },
  {
    'id': 14,
    'label' : 'Current Work Shift time',
    'name' : 'currentwst',
    'type' : 'text'
  },
  {
    'id': 15,
    'label' : 'Per Hour / Per Month Rate',
    'name' : 'perate',
    'type' : 'text'
  },
  // {
  //   'id': 16,
  //   'label' : 'Any daily Stand-up Call',
  //   'name' : 'anydscall',
  //   'type' : 'text'
  // },
  {
    'id': 17,
    'label' : 'No. of Hours Daily',
    'name' : 'nohrsdaily',
    'type' : 'text'
  },
  {
    'id': 18,
    'label' : 'Employment Type',
    'name' : 'employment_type',
    'type' : 'text'
  },
  
  
  ]

  const inputDropAtributes = [{
    'id': 1,
    'label' : 'Any daily Stand-up Call',
    'name' : 'anydscall',
    'values' : [{
                  'id': 11,
                  'value': 'Yes',
                  'placehoder':'Yes'
                },
                {
                  'id': 12,
                  'value': 'No',
                  'placehoder':'No'
                }]
  }]

  const submitData = async(resData) =>{
    const res = await addResource(resData);
    console.log(res);
    if (res.status === 201) {
      toast.success(res.data, {
          position: "top-center"
      });
      //Formik.resetForm();
      //console.log(initialValues);
   
  }else{
    toast.error("Something went wrong", {
      position: "top-center"
  });
  }
  }


  return (
    <>
      <h1>Add New Resource</h1>
      <div className='newVendor'>
      <Formik
        initialValues={{
          fullname:'',
          email:'',
          phone:'',
          techprofile:'',  
          skillset:'',
          totalexpr:'',
          relevantexpr:'',
          currentctc:'',
          expectedctc:'',
          availjoin:'',
          noticeperiod:'',
          systmconfig:'',
          prefrdlocation:'',
          currentwst:'',
          perate:'',
          anydscall:'',
          nohrsdaily:'',
          employment_type:'',
        }}
        validationSchema= {validationSchemaResource}
        onSubmit={(values, { resetForm }) => {
          submitData(values);
          //resetForm();
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

export default NewResource