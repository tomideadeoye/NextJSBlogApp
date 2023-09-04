import Pagination from '@/components/Pagination'
import NewsletterForm from '@/components/NewsletterForm'
import {
  Formik,
  FieldArray,
  Field,
  Form,
  ErrorMessage,
  FieldArrayRenderProps,
} from 'formik'
import * as Yup from 'yup'
import { Blog, Author, IInitialValues } from '@/types'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

interface Props {
  title: string
  initialDisplayPosts?: Blog[]
  pagination?: React.ComponentProps<typeof Pagination>
}

export default function Compose() {
  const { toast } = useToast()
  const initialValues = {
    title: '',
    body: [
      {
        type: 'text',
        content: '',
      },
    ],
    tags: '',
    authors: [
      {
        authorName: '',
        authorTitle: '',
        authorDescription: '',
        authorAvatar: '',
        authorTwitter: '',
      },
    ],
  }

  interface IFormProps {
    resetForm: () => void
  }

  const handleSubmit = (values: IInitialValues, { resetForm }: IFormProps) => {
    const tagsArray = values.tags.split(',').map((tag) => tag.trim())

    const newPost = {
      title: values.title,
      body: values.body,
      tags: tagsArray,
      authors: values.authors,
      date: new Date().toISOString(),
    }

    const storedPosts = localStorage.getItem('blogPosts')
    const existingPosts = storedPosts ? JSON.parse(storedPosts) : []

    existingPosts.push(newPost)
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts))

    resetForm()
    toast({
      title: 'Success!',
      description: 'Your blog post has been published.',
      action: <ToastAction altText='visit post'>Visit Post</ToastAction>,
    })

    setTimeout(() => {
      window.location.href = '/'
    }, 3000)
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    tags: Yup.string(),
    authors: Yup.array().of(
      Yup.object().shape({
        authorName: Yup.string().required('Author Name is required'),
        authorTitle: Yup.string().required('Author Title is required'),
        authorDescription: Yup.string(),
        authorAvatar: Yup.string(),
        authorTwitter: Yup.string(),
      }),
    ),
  })

  return (
    <>
      <div className='divide-y divide-gray-200 dark:divide-gray-600'>
        <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            Compose
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                <Field
                  type='text'
                  id='postTitle'
                  name='title'
                  autoComplete='off'
                  className='mb-4 w-full rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black'
                  placeholder='Enter the title of your blog post'
                />
                <ErrorMessage
                  name='title'
                  component='div'
                  className='text-red-500'
                />

                <FieldArray
                  name='body' // Name should match the field name in initialValues
                  render={(arrayHelpers: FieldArrayRenderProps) => (
                    <div>
                      {values.body.map((section, index) => (
                        <div key={index}>
                          {/* Add a select input for section type */}
                          <Field
                            as='select'
                            name={`body[${index}].type`}
                            autoComplete='off'
                            className='mb-4 w-full rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black'
                          >
                            <option value='text'>Text</option>
                            <option value='code'>Code</option>
                            <option value='image'>Image</option>
                          </Field>

                          <Field
                            as='textarea'
                            name={`body[${index}].content`}
                            autoComplete='off'
                            className={`mb-4 ${
                              section.type === 'image' ? '' : 'h-80'
                            }
                            w-full rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black`}
                            placeholder={
                              section.type === 'image'
                                ? 'Enter the image URL'
                                : 'Enter your content'
                            }
                          />

                          <ErrorMessage
                            name={`body[${index}].content`}
                            component='div'
                            className='text-red-500'
                          />
                        </div>
                      ))}
                      <button
                        type='button'
                        className='btn-secondary mb-4 rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-primary-600 dark:ring-offset-black'
                        onClick={() =>
                          arrayHelpers.push({ type: 'text', content: '' })
                        }
                      >
                        Add Another Section
                      </button>
                    </div>
                  )}
                />

                <ErrorMessage
                  name='content'
                  component='div'
                  className='text-red-500'
                />

                <Field
                  type='text'
                  id='postTags'
                  name='tags'
                  autoComplete='off'
                  className='mb-4  w-full rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black'
                  placeholder='Enter tags (comma-separated)'
                />

                <h1 className='text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14'>
                  Author Details
                </h1>
                <FieldArray
                  name='authors'
                  render={(arrayHelpers: Author[]) => (
                    <>
                      {values.authors.map((author, index) => (
                        <div key={index}>
                          <Field
                            type='text'
                            id={`authorName${index}`}
                            name={`authors[${index}].authorName`}
                            autoComplete='off'
                            className='mb-4 w-full rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black'
                            placeholder={`Author ${index + 1}'s Name`}
                          />
                          <ErrorMessage
                            name={`authors[${index}].authorName`}
                            component='div'
                            className='text-red-500'
                          />

                          <Field
                            type='text'
                            id={`authorTitle${index}`}
                            name={`authors[${index}].authorTitle`}
                            autoComplete='off'
                            className='mb-4 w-full rounded-md px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black'
                            placeholder={`Author ${index + 1}'s Title`}
                          />
                          <ErrorMessage
                            name={`authors[${index}].authorTitle`}
                            component='div'
                            className='text-red-500'
                          />
                        </div>
                      ))}
                      <button
                        type='button'
                        className='btn-secondary mb-4 rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-primary-600 dark:ring-offset-black'
                        onClick={() =>
                          arrayHelpers.push(initialValues.authors[0])
                        }
                      >
                        Add Another Author
                      </button>
                    </>
                  )}
                />

                <button
                  type='submit'
                  className='btn-primary rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-primary-600 dark:ring-offset-black'
                >
                  Publish Blog Post
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <Toaster />
      </div>

      <div className='flex items-center justify-center pt-4'>
        <NewsletterForm />
      </div>
    </>
  )
}
