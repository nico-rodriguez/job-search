import { Field, Form, Formik } from 'formik';
import './Search.css';
import SearchResults from './SearchResults';
import jobs from '../../data/jobs.json';
import { useState } from 'react';

interface Values {
  search: string;
  fullTime: boolean;
  location: string;
  locationRadio: string;
}

type JobType = 'Full Time' | 'Part Time';

export interface Job {
  id: string;
  type: JobType;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
}

export default function Search() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs as Job[]);

  return (
    <main className='main'>
      <Formik
        initialValues={{
          search: '',
          fullTime: false,
          location: '',
          locationRadio: '',
        }}
        onSubmit={(values: Values) => {
          // Reset jobs to initial value
          setFilteredJobs(jobs as Job[]);

          // Apply filters (if provided)
          if (values.fullTime) {
            setFilteredJobs((jobs) =>
              jobs.filter((job) => job.type === 'Full Time')
            );
          }
          if (values.location) {
            setFilteredJobs((jobs) =>
              jobs.filter((job) =>
                job.location
                  .toLowerCase()
                  .includes(values.location.toLowerCase())
              )
            );
          }
          if (values.locationRadio) {
            if (values.locationRadio !== 'all') {
              setFilteredJobs((jobs) =>
                jobs.filter((job) =>
                  job.location
                    .toLowerCase()
                    .includes(values.locationRadio.toLowerCase())
                )
              );
            }
          }

          // Filter by search string (if provided)
          if (values.search) {
            setFilteredJobs((jobs) =>
              jobs.filter(
                (job) =>
                  job.type
                    .toLowerCase()
                    .includes(values.search.toLowerCase()) ||
                  job.company
                    .toLowerCase()
                    .includes(values.search.toLowerCase()) ||
                  job.location
                    .toLowerCase()
                    .includes(values.search.toLowerCase()) ||
                  job.title
                    .toLowerCase()
                    .includes(values.search.toLowerCase()) ||
                  job.description
                    .toLowerCase()
                    .includes(values.search.toLowerCase())
              )
            );
          }
        }}
      >
        <>
          <Form>
            <div className='form__search'>
              <div className='search-bar'>
                <Field
                  name='search'
                  placeholder='&#xe943; Title, companies, expertise or benefits'
                  className='search-bar__input'
                />
                <button type='submit' className='search-bar__button'>
                  Search
                </button>
              </div>
            </div>
          </Form>
          <section>
            <div className='form__filters'>
              <label className='full-time-filter'>
                <Field
                  type='checkbox'
                  name='fullTime'
                  className='full-time-filter__field'
                />
                Full time
              </label>
              <fieldset className='radio-filters'>
                <legend className='radio-filters__legend'>Location</legend>
                <Field
                  type='text'
                  name='location'
                  placeholder='&#xe80b; City, state, zip code or country'
                  className='location-text'
                />
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='all'
                    id='all'
                    className='location-radio__input'
                  />
                  All
                </label>
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='london'
                    id='london'
                    className='location-radio__input'
                  />
                  London
                </label>
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='amsterdam'
                    id='amsterdam'
                    className='location-radio__input'
                  />
                  Amsterdam
                </label>
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='new york'
                    id='new-york'
                    className='location-radio__input'
                  />
                  New York
                </label>
                <label className='location-radio'>
                  <Field
                    type='radio'
                    name='locationRadio'
                    value='berlin'
                    id='berlin'
                    className='location-radio__input'
                  />
                  Berlin
                </label>
              </fieldset>
            </div>
            <SearchResults results={filteredJobs} />
          </section>
        </>
      </Formik>
    </main>
  );
}
