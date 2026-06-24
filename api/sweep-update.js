export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        if (req.method === 'OPTIONS') return res.status(200).end();

          try {
              const response = await fetch(
                    'https://script.google.com/macros/s/AKfycbzKpA8BwQAWelIT5Fuxrwlq8xV1Kb7J6tkAJnhq0Un4TvPhcwscxjC1p8w1azxMI9X_Lg/exec',
                          {
                                  method: 'POST',
                                          headers: { 'Content-Type': 'application/json' },
                                                  body: JSON.stringify(req.body)
                                                        }
                                                            );
                                                                const data = await response.json();
                                                                    res.status(200).json(data);
                                                                      } catch (err) {
                                                                          res.status(500).json({ error: err.message });
                                                                            }
                                                                            }
