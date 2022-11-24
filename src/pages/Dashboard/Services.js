import React from 'react'
import {FormRow} from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage';

function Services() {
  return (
    <div>
      <Wrapper>
        <form className='form' onSubmit={()=>{}}>
          <h3>Create Organization</h3>
  
          <div className='form-center'>
            <FormRow
              type='text'
              name='name'
              value=""
              labelText="Name of Organization"
              handleChange={null}
            />
            <FormRow
              type='date'
              labelText='Year of Establishment'
              name='year_of_establishment'
              value=""
              handleChange={null}
            />
            <FormRow
              type='text'
              labelText="Organizational Thematic Area"
              name='organizational_thematic_area'
              value=""
              handleChange={null}
            />
            <FormRow
              type='text'
              labelText="Address/Office location"
              name='office_address'
              value=""
              handleChange={null}
            />
            <FormRow
              type='text'
              labelText="Contact Details"
              name='contact_details'
              value=""
              handleChange={null}
            />
            <FormRow
              type='text'
              labelText="Organization Email Address"
              name='email_address'
              value=""
              handleChange={null}
            />
            <FormRow
              type='text'
              labelText="Registration Status"
              name='registration_status'
              value=""
              handleChange={null}
            />            
          </div>
          <br/>
          <div>
            <button className='btn btn-block' type='submit' disabled={false}>
              Register Organization
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  )
}

export default Services
