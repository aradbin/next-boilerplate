import { FormFieldType } from '@/lib/types'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { upperFirst } from 'lodash'

export default function InputField({ form, data }: FormFieldType) {
  return (
    <FormField
      control={form.control}
      name={data.name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel>{data.label || upperFirst(data.name)}</FormLabel>
          <FormControl>
            <Input type={data.type || 'text'} placeholder={data.placeholder || data.label || upperFirst(data.name)} {...field} />
          </FormControl>
          {data.description && <FormDescription>{data.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
