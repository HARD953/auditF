import React from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import SupportMapDetail from "../others/supportMapDetail";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { customizeNumerFormat } from "src/utils/functionsUtils";
import { attacheImageUrl } from "src/api/axiosInstance";

const DetailsSupportPanel = ({ value, label }) => {
  return (
    <div className="col-md-4 my-2 justify-content-start align-items-center">
      <div className="d-flex justify-content-start align-items-center">
        <p className="my-0 me-3"> {label} : </p>
        <p className="fw-bolder my-0"> {value} </p>
      </div>
    </div>
  );
};

export default function ShowSupportDetailDialog({
  visible,
  setVisible,
  selectedSupport,
}) {
  return (
    <Dialog
      header="DETAIL SUPPORT"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => setVisible(false)}
    >
      <section className="">
        <div className="text-center ">
          <Image
            src={`${attacheImageUrl(selectedSupport?.image_support)}`}
            alt={`support-${selectedSupport?.Marque}`}
            width="350"
            preview
            imageClassName="img-fluid shadow rounded my-0"
          />
        </div>
        <h5 className="fw-bolder h5 text-center mt-3">
          {" "}
          {selectedSupport?.entreprise}{" "}
        </h5>
        <div className="d-flex justify-content-between pb-4 pt-2">
          <DetailsSupportPanel value={selectedSupport?.canal} label="Canal" />
          <DetailsSupportPanel
            value={selectedSupport?.surface}
            label="Surface (m) "
          />
          <DetailsSupportPanel
            value={selectedSupport?.visibilite}
            label="Visibilité"
          />
        </div>
        <div className="d-flex justify-content-between pb-4 pt-2">
          <DetailsSupportPanel
            value={selectedSupport?.type_support}
            label="Type de Support"
          />
          <DetailsSupportPanel
            value={selectedSupport?.commune}
            label="Commune"
          />
          <DetailsSupportPanel
            value={selectedSupport?.quartier}
            label="Quartier"
          />
        </div>
        <div className="d-flex justify-content-between pb-4 pt-2">
          <DetailsSupportPanel
            value={selectedSupport?.etat_support}
            label="Etat Support"
          />
          <DetailsSupportPanel value={selectedSupport?.Marque} label="Marque" />
          <DetailsSupportPanel
            value={selectedSupport?.typesite}
            label="Type de Site"
          />
        </div>
        <div className="d-flex justify-content-between pb-4 pt-2">
          <DetailsSupportPanel
            value={customizeNumerFormat(Number(selectedSupport?.TSP))}
            label="Montant TSP"
          />
          <DetailsSupportPanel
            value={customizeNumerFormat(Number(selectedSupport?.ODP_value))}
            label="Montant ODP"
          />
          <DetailsSupportPanel
            value={`${
              customizeNumerFormat(
                Number(selectedSupport?.ODP_value) +
                  Number(selectedSupport?.TSP)
              ) || 0
            }`}
            label="Montant Total"
          />
        </div>

        <h6 className="h6 fw-bold mt-3">Informations Responsable</h6>
        <div className="d-flex justify-content-between pb-4 pt-2">
          <DetailsSupportPanel
            value={selectedSupport?.Rnom || ""}
            label="Nom"
          />

          <DetailsSupportPanel
            value={selectedSupport?.Rprenom || ""}
            label="Prénom"
          />

          <DetailsSupportPanel
            value={selectedSupport?.Rcontact || ""}
            label="Contact"
          />
        </div>
        <div className="d-flex justify-content-between pb-4 pt-2">
          <label className="">Signature</label>
          <Image
            src={`${attacheImageUrl(selectedSupport?.signature1)}`}
            alt={`Signature${selectedSupport?.Rnom}`}
            width="350"
            preview
            imageClassName="img-fluid shadow rounded my-0"
          />
        </div>
        <h6 className="h6 fw-bold mt-3">Informations Superviseur</h6>
        <div className="d-flex justify-content-between pb-4 pt-2">
          <DetailsSupportPanel
            value={selectedSupport?.Snom || ""}
            label="Nom"
          />

          <DetailsSupportPanel
            value={selectedSupport?.Sprenom || ""}
            label="Prénom"
          />

          <DetailsSupportPanel
            value={selectedSupport?.Scontact || ""}
            label="Contact"
          />
        </div>
        <div className="d-flex justify-content-between pb-4 pt-2">
          <label className="">Signature</label>
          <Image
            src={`${attacheImageUrl(selectedSupport?.signature)}`}
            alt={`Signature${selectedSupport?.Rnom}`}
            width="350"
            preview
            imageClassName="img-fluid shadow rounded my-0"
          />
        </div>
        <Divider align="center">
          <Button
            aria-label="Button"
            icon="pi pi-angle-double-down"
            className="p-button-outlined rounded-pill "
          ></Button>
        </Divider>

        <div className="d-flex justify-content-between pb-4 pt-2">
          <div className="d-flex justify-content-start align-items-center">
            <p className="my-0 me-3"> Longitude : </p>
            <p className="fw-bolder my-0"> {selectedSupport?.longitude} </p>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <p className="my-0 me-3"> Latitude : </p>
            <p className="fw-bolder my-0"> {selectedSupport?.latitude} </p>
          </div>
        </div>
        <div className="">
          <SupportMapDetail
            image={selectedSupport?.image_support}
            position={[selectedSupport?.latitude, selectedSupport?.longitude]}
          />
        </div>
      </section>
    </Dialog>
  );
}
