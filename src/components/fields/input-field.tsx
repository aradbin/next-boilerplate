import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { upperFirst } from 'lodash'

export function InputField({
  form,
  data,
}: {
  form: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any
  }
  data: {
    name: string
    label?: string
    type?: string
    placeholder?: string
    description?: string
  }
}) {
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
