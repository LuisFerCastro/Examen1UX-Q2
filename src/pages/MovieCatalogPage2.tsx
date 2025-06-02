import React from "react";
import HorizontalGallery2 from "@/components/organismos/HorizontalGallery";
import { Badge } from "react-bootstrap";

const images = [
  { src: "https://m.media-amazon.com/images/S/pv-target-images/017c939bb93ad7941590bc4ea52fc3028fdd0de145dd8157bed6d6e973b400d2.jpg", alt: "Película 1"},
  { src: "https://www.aceprensa.com/wp-content/uploads/2019/07/1418-1-683x1024.jpg", alt: "Película 2" },
  { src: "https://i.redd.it/zixq8u49byyd1.jpeg", alt: "Película 3" },
  { src: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8553063_b_v13_ax.jpg", alt: "Película 4"},
  { src: "https://es.web.img3.acsta.net/pictures/19/04/29/08/21/1692162.jpg?coixp=45&coiyp=73", alt: "Película 5" },
  { src: "https://fr.web.img5.acsta.net/pictures/14/03/24/12/46/257044.jpg", alt: "Película 6" },
  { src: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/bf214cac-c6ec-4ba4-b706-020eaa5138f6/300127a5-3ce3-11f0-97f2-027602c5f941?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320", alt: "Película 7" },
  { src: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/d65dbc55-3637-49a2-a664-08620ba183f6/57ae4462-1f92-11f0-87de-12d2ff7fc15d?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320", alt: "Película 8" },
  { src: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/818c3d9d-1831-48a6-9583-0364a7f98453/87d2a51a3bdafac8a1513671f95a2cc7a5336591.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320", alt: "Película 9" },
  { src: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/18ad0649-f2dd-410d-8842-2ba2aa486fdb/d1c29c43-6edb-11ef-bb0b-0afff21f57b1?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320", alt: "Película 10" },
];

export default function MovieCatalogPage() {
  return (
    <div style={{ background: "#0c0c0c", minHeight: "100vh", color: "#fff" }}>
      <h2 className="text-start text-md-start">Para ti</h2>
      <HorizontalGallery2 images={images} />
    </div>
  );
}
