import Container from '@mui/material/Container';
import Image from 'next/image';
import cover from "@/public/images/profile/book/cover.webp";
import page1 from "@/public/images/profile/book/page_1.webp";
import page2 from "@/public/images/profile/book/page_2.webp";
import HTMLFlipBook from 'react-pageflip';

export const Book = () => {
    return (
        <Container>
            <HTMLFlipBook
                width={300}
                height={500}
                minWidth={300}
                maxWidth={400}
                minHeight={400}
                maxHeight={600}
                size="fixed"
                startPage={0}
                style={{ margin: "0 auto" }}
                showCover={true}
                drawShadow={true}
                maxShadowOpacity={0.5}
                mobileScrollSupport={true}
                className="p-[20px] mx-auto"
                flippingTime={1000}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={0}
                showPageCorners={true}
                disableFlipByClick={false}
            >
                <div>
                    cover
                    <Image src={cover} fill alt='cover' className='object-cover' />
                </div>
                <div>
                    page1
                    <Image src={page1} fill alt='cover' className='object-cover' />

                </div>
                <div>
                    page2
                    <Image src={page2} fill alt='cover' className='object-cover' />

                </div>
            </HTMLFlipBook>
        </Container>
    )
}