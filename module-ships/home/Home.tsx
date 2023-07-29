import {
  CategoryCard,
  SectionHeader,
  SearchBox,
  PopularShips,
  ReviewsSection,
  PartnerSection,
  BlogSection,
} from '@/components'
import { categoryList, productList } from '@/constants/config'
import styles from './Home.module.scss'

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <SearchBox
          className={styles.searchBox}
          title="Bạn lựa chọn du thuyền Hạ Long nào?"
          description="Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn"
        />
      </div>
      <div id={styles.popularSections} className="section-bg">
        <PopularShips ships={productList} />
      </div>
      <div id={styles.reviewSection} className="section-bg">
        <ReviewsSection />
      </div>
      <div className={['container', styles.section].join(' ')}>
        <SectionHeader
          title={<>Các điểm đến của Mixivivu</>}
          description="Khám phá vẻ đẹp tuyệt vời của Du thuyền Hạ Long: Hành trình đến thiên đường thiên nhiên"
          center
        />
        <div className={styles.cardList}>
          {categoryList.map((item, index) => (
            <CategoryCard {...item} key={index} />
          ))}
        </div>
      </div>
      <div id={styles.partnersSection} className="section-bg">
        <PartnerSection />
      </div>
      <BlogSection />
    </div>
  )
}
