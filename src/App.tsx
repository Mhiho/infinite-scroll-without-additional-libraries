import { useEffect, useState } from 'react';
import './App.css';
import { ListItem } from './components/ListItem';
import { fetchHandler } from './services/fetchHandler';
import { ItemI } from './types/Item';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const [items, setItems] = useState<ItemI[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [numberOfItemsOnPage, setNumberOfItemsOnPage] = useState<number>(2);
  const [documentHeight, setDocumentHeight] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    setDocumentHeight(window.document.body.scrollHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handler = async (itemIndexes: number[]) => {
      const resultItems = [];
      for (const id of itemIndexes) {
        const fetchedItem = await fetchHandler(id);
        resultItems.push(fetchedItem);
      }
      setItems([...items, ...resultItems]);
    };
    handler([1, 2]);
  }, []);

  useEffect(() => {
    //logic for lazy loading
    if (scrollPosition > documentHeight - window.innerHeight) {
      setNumberOfItemsOnPage(numberOfItemsOnPage + 1);
      const handler = async () => {
        const addedItem = await fetchHandler(numberOfItemsOnPage);
        setItems([...items, addedItem]);
      };
      handler();
    }
  }, [documentHeight, scrollPosition]);

  return (
    <>
      <ErrorBoundary>
        <h1>Infinite scroll</h1>
        <ListItem items={items} />
      </ErrorBoundary>
    </>
  );
}

export default App;
