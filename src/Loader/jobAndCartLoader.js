

import { getStoredCart } from "../utilities/fakeDB"

export const jobsAndCartData = async () => {
  const jobsData = await fetch('/jobs.json')
  const jobs = await jobsData.json()

  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const foundJob = jobs.find(j => j.id == id)
    if (foundJob) {
      const quantity = savedCart[id]
      foundJob.quantity = quantity
      initialCart.push(foundJob)
    }
    
  }
 

  return { jobs, initialCart }
}
