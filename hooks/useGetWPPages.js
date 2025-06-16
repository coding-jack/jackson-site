import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import axios from 'axios'

const importPages = async () => {
  // if environment is development, use the local API
  if (process.env.NODE_ENV === 'development') {
    const response = await axios.get('/api/wp/pages');
    return response.data;
  }
  // if environment is production, use the remote API
  if (process.env.NODE_ENV === 'production') {
    const apiUrl = `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/pages`
    const pages = axios
      .get(apiUrl)
      .then((result) => {
        return result.data
      })

    return pages
  }
};


export default function useGetWPPages() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function wrapperImportPages() {
      const pagesList = await importPages();
      await dispatch({ type: 'SET_PAGE_DATA', payload: pagesList })
      return pagesList;
    }
    wrapperImportPages();
  }, [])
}
