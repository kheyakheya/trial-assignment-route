
export const categoryData = async () => {
  const categoryData = await fetch('/catagory.json')
  const categories = await categoryData.json()

  
  return categories ;
}
