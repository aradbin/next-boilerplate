'use client'

import InputField from '@/components/fields/input-field'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { FormFieldType } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function FormComponent({
  formData,
  handleSubmit,
}: {
  formData: {
    fields: FormFieldType['data'][]
    formSchema: z.ZodSchema
    defaultValues: unknown
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: any
}) {
  const form = useForm<z.infer<typeof formData.formSchema>>({
    resolver: zodResolver(formData.formSchema),
    defaultValues: formData.defaultValues,
  })

  const onSubmit = async (values: z.infer<typeof formData.formSchema>) => {
    await handleSubmit(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {formData.fields.map((field) => (
            <React.Fragment key={field.name}>{renderField(field.type || 'text', { form, data: field })}</React.Fragment>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <Button type="submit" className="w-[150px]" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="animate-spin" /> Please Wait
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

function renderField(type: string, { form, data }: FormFieldType) {
  switch (type) {
    case 'text':
      return <InputField form={form} data={data} />

    default:
      return <InputField form={form} data={data} />
  }
}
