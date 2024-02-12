type Props = {
    imageUrl: string;
    altText: string;
}

export default function Image({imageUrl,altText}: Props) {
  return (
    <div>
        <img src={imageUrl} alt={altText} />
        </div>
  )
}