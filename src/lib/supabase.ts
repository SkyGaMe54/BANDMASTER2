import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'VOTRE_URL_SUPABASE';
const supabaseKey = 'VOTRE_CLE_PUBLIQUE_SUPABASE';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getImages() {
  const { data, error } = await supabase
    .storage
    .from('bandmaster-images')
    .list();

  if (error) {
    console.error('Erreur lors de la récupération des images:', error);
    return [];
  }

  return data;
}

export async function getImageUrl(path: string) {
  const { data } = supabase
    .storage
    .from('bandmaster-images')
    .getPublicUrl(path);

  return data.publicUrl;
}