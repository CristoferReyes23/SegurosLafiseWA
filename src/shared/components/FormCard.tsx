import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import Image from "react-bootstrap/esm/Image";
import { getImageURL } from "@/shared/utils/getImageUrl";

interface Props {
  title: string;
  children: any;
}

const FormCard = ({ children, title }: Props) => {
  return (
    <Card className="w-auto rounded-0 m-0">
      <Stack
        direction="horizontal"
        className="mt-3 mb-3 align-content-center mb-2 "
      >
        <Image
          src={getImageURL("profile.svg")}
          className="icon-image"
          alt="icon"
          width={"40px"}
          height={"40px"}
          style={{ marginLeft: "-20px" }}
        />
        <p className="text-blue m-0 ms-2 fw-semibold">{title}</p>
      </Stack>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default FormCard;
