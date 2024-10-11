import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, CircularProgress, Box } from '@mui/material';

function ConferencePage({ slug }) {
  const [conf, setConf] = useState(null);

  useEffect(() => {
    const fetchConf = async () => {
      const confData = { id: 1, name: "Conferência de Teste" };
      setConf(confData);
    };
    fetchConf();
  }, [slug]);

  if (!conf) return <Box display="flex" justifyContent="center"><CircularProgress /></Box>;

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        {conf.name}
      </Typography>
      <Talks confId={conf.id} />
    </div>
  );
}

function Talks({ confId }) {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    const fetchTalks = async () => {
      const talksData = [{ video: "Vídeo 1" }, { video: "Vídeo 2" }];
      setTalks(talksData);
    };
    fetchTalks();
  }, [confId]);

  if (!talks.length) return <Box display="flex" justifyContent="center"><CircularProgress /></Box>;

  return (
    <div>
      <Typography variant="h6" component="h3" gutterBottom>
        Vídeos
      </Typography>
      <List>
        {talks.map((talk, index) => (
          <ListItem key={index}>
            <ListItemText primary={talk.video} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ConferencePage;
