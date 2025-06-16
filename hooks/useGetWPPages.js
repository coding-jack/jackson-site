import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import axios from 'axios'

const importPages = async () => {
  const response = await axios.get('/api/wp/pages');
  return response.data;
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
