import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  traveler_name: z.string().min(2, 'Name must be at least 2 characters'),
  message: z.string().min(3, 'Message must be at least 3 characters'),
  region: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LogFormProps {
  onSubmit: (data: FormData) => Promise<boolean>;
}

const LogForm: React.FC<LogFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmitForm = async (data: FormData) => {
    const success = await onSubmit(data);
    if (success) reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <div>
        <input
          {...register('traveler_name')}
          placeholder="Your name"
          className="input-field"
        />
        {errors.traveler_name && (
          <p className="text-red-400 text-sm mt-1">{errors.traveler_name.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('message')}
          placeholder="Share your adventure..."
          rows={3}
          className="input-field"
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('region')}
          placeholder="Region (optional)"
          className="input-field"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'POSTING...' : 'POST TRAVEL LOG'}
      </button>
    </form>
  );
};

export default LogForm;