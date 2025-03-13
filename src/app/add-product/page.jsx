'use client';
import { useAddProductMutation } from '@/redux/api/auth/authApi';
import { useForm, useFieldArray } from 'react-hook-form';

const AddProduct = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      productName: '',
      description: '',
      price: '',
      stock: '',
      images: [''],
      categoryId: '',
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'images',
  });

  const [addProduct, { isLoading, error }] = useAddProductMutation({
    fixedCacheKey: 'addProduct',
    query: (productData) => ({
      url: 'api/v1/products',
      method: 'POST',
      body: productData,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }),
  });

  const onSubmit = async (data) => {
    await addProduct(data);
  };

  return (
    <div className="max-w-lg my-10 mx-auto p-6 bg-green-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-green-800">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('productName', { required: 'Product Name is required' })}
          placeholder="Product Name"
          className="w-full p-2 border rounded text-black bg-green-50"
        />
        {errors.productName && <p className="text-red-500">{errors.productName.message}</p>}

        <textarea
          {...register('description', { required: 'Description is required' })}
          placeholder="Description"
          className="w-full p-2 border rounded text-black bg-green-50"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}

        <input
          type="number"
          {...register('price', { required: 'Price is required', min: 0 })}
          placeholder="Price"
          className="w-full p-2 border rounded text-black bg-green-50"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        <input
          type="number"
          {...register('stock', { required: 'Stock is required', min: 0 })}
          placeholder="Stock Quantity"
          className="w-full p-2 border rounded text-black bg-green-50"
        />
        {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}

        {fields.map((field, index) => (
          <input
            key={field.id}
            {...register(`images.${index}`)}
            placeholder="Image URL"
            className="w-full p-2 border rounded text-black bg-green-50"
          />
        ))}

        <button
          type="button"
          onClick={() => append('')}
          className="px-4 py-2 bg-green-300 rounded text-green-800"
        >
          + Add Another Image
        </button>

        <input
          {...register('categoryId', { required: 'Category ID is required' })}
          placeholder="Category ID"
          className="w-full p-2 border rounded text-black bg-green-50"
        />
        {errors.categoryId && <p className="text-red-500">{errors.categoryId.message}</p>}

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error.message}</p>}
    </div>
  );
};

export default AddProduct;
