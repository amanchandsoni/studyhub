export const CLASS_10_MATHS_NOTES = {
  ch1: {
    title: "Real Numbers",
    content: `
# Chapter 1: Real Numbers

## 1. Introduction
- Real numbers = Rational + Irrational numbers  
- Rational numbers: Numbers that can be expressed as p/q (q≠0)  
- Irrational numbers: Numbers that **cannot** be expressed as p/q, e.g., √2, π  

### Properties:
- Closure, Commutativity, Associativity, Distributivity, Identity, Inverse

---

## 2. Euclid’s Division Lemma
**Statement:** For integers a and b (b>0), there exist unique q and r such that  
**a = bq + r, 0 ≤ r < b**  

**Example:** Divide 23 by 5 → 23 = 5×4 + 3 → q=4, r=3

---

## 3. Fundamental Theorem of Arithmetic
- Every composite number = product of primes **uniquely** (except order)  
- Example: 60 = 2×2×3×5

---

## 4. Irrational Numbers
- √2, √3, π are non-terminating, non-recurring decimals  
- Sum/product of rational + irrational = irrational  
- Sum/product of 2 irrationals can be rational or irrational  

**Example:** √2 + (-√2) = 0 (rational)

---

## 5. Decimal Representation
- Terminating decimals: 0.25, 0.75  
- Non-terminating recurring: 0.333..., 0.666...  
- Fraction → Decimal & Decimal → Fraction conversion

---

## 6. HCF & LCM
- HCF = Highest Common Factor  
- LCM = Least Common Multiple  
- Use **prime factorization** or **Euclid’s Lemma**

**Example:** 24 = 2³×3, 36 = 2²×3²  
HCF = 2²×3 = 12  
LCM = 2³×3² = 72

---

## 7. Rationalization
- Remove irrational from denominator  
- Multiply numerator & denominator by **conjugate**

**Example:** 1/(√3 + 1) × (√3 - 1)/(√3 - 1) = √3 - 1

---

## 8. Exercises
1. HCF of 84 & 120  
2. Express 180 as product of primes  
3. Classify: 0.1010010001...  
4. Rationalize: 1/(√2 + 1)  
5. Word Problem: LCM=180, HCF=6, one number=54, find other
`
  },

  ch2: {
    title: "Polynomials",
    content: `
# Chapter 2: Polynomials

## 1. Introduction
- Polynomial: Expression of the form a₀ + a₁x + a₂x² + … + anxⁿ  
- Degree: Highest power of x with non-zero coefficient  
- Coefficients: a₀, a₁, …, an  

---

## 2. Types of Polynomials
- Linear: Degree 1 → x + 3  
- Quadratic: Degree 2 → x² + 5x + 6  
- Cubic: Degree 3 → x³ - 2x² + x - 5

---

## 3. Zeros of a Polynomial
- A value α is a zero if P(α) = 0  
- Relation between zeros and coefficients (Quadratic):  
  - α + β = -b/a  
  - αβ = c/a  

---

## 4. Division Algorithm
- For polynomials P(x) and D(x) ≠ 0, ∃ unique Q(x) and R(x) such that:  
  **P(x) = D(x) × Q(x) + R(x)**, deg R(x) < deg D(x)

---

## 5. Factorization
- Use identities like a² - b² = (a-b)(a+b)  
- Factor quadratic polynomials using zeros

---

## 6. Exercises
1. Find zeros of x² - 5x + 6  
2. Factorize x² + 5x + 6  
3. Divide x³ + 2x² - x + 3 by x - 1  
4. Find remainder when 2x³ + 3x² - x + 5 is divided by x + 2
`
  },

  ch3: {
    title: "Pair of Linear Equations in Two Variables",
    content: `
# Chapter 3: Pair of Linear Equations in Two Variables

## 1. Introduction
- Linear equation in two variables: ax + by + c = 0  
- Pair of linear equations:  
  a₁x + b₁y + c₁ = 0  
  a₂x + b₂y + c₂ = 0  

---

## 2. Methods of Solving
### (i) Substitution Method
1. Solve one equation for one variable  
2. Substitute in other equation

### (ii) Elimination Method
1. Multiply equations to match coefficients  
2. Subtract or add to eliminate one variable

### (iii) Cross-Multiplication Method
- x = (b₁c₂ - b₂c₁) / (a₁b₂ - a₂b₁)  
- y = (c₁a₂ - c₂a₁) / (a₁b₂ - a₂b₁)

---

## 3. Graphical Method
- Represent each equation as a line on graph  
- Intersection gives solution (one, none, or infinite)

---

## 4. Exercises
1. Solve: x + y = 5, x - y = 1  
2. Solve: 2x + 3y = 13, 3x - y = 1  
3. Solve graphically: x + y = 3, x - y = 1
`
  },

  ch4: {
    title: "Quadratic Equations",
    content: `
# Chapter 4: Quadratic Equations

## 1. Introduction
- Quadratic equation: ax² + bx + c = 0, a ≠ 0  

---

## 2. Methods of Solving
### (i) Factorization
- Find factors of quadratic, then solve each factor = 0

### (ii) Completing the Square
- Transform ax² + bx + c into (x + p)² = q

### (iii) Quadratic Formula
- x = [-b ± √(b² - 4ac)] / 2a

---

## 3. Nature of Roots
- Discriminant D = b² - 4ac  
  - D > 0 → 2 real & distinct roots  
  - D = 0 → 2 real & equal roots  
  - D < 0 → 2 complex roots

---

## 4. Exercises
1. Solve x² - 5x + 6 = 0  
2. Solve 2x² + 3x - 5 = 0  
3. Find roots of x² + 4x + 5 = 0
`
  },
  ch5: {
    title: "Arithmetic Progressions (AP)",
    content: `
# Chapter 5: Arithmetic Progressions (AP)

## 1. Introduction
- Sequence where each term after first differs by constant d  
- General form: a, a + d, a + 2d, …, a + (n-1)d  
- Examples: 2, 5, 8, 11, … ; 10, 7, 4, 1, …

---

## 2. nth Term of AP
- Formula: **Tn = a + (n-1)d**  
- Example: AP: 3, 7, 11, … → a=3, d=4  
  - 10th term: T10 = 3 + (10-1)*4 = 39

---

## 3. Sum of n Terms of AP
- Formula: **Sn = n/2 × [2a + (n-1)d]**  
- Alternate: Sn = n/2 × (first term + last term)

**Example 1:** AP: 5, 8, 11, …, 50  
- Find Sn  
- n = ? → nth term formula: 50 = 5 + (n-1)*3 → n=16  
- Sn = 16/2 * (5+50) = 8*55 = 440

---

## 4. Solved Problems
1. Find 15th term of AP: 7, 10, 13, …  
   - T15 = 7 + 14*3 = 49  

2. Sum of first 20 terms of AP: 2, 5, 8, …  
   - Sn = 20/2*(2+59) → Sn=610

---

## 5. Word Problems
1. Sum of 10 consecutive odd numbers starting from 1  
   - AP: 1, 3, 5, …, 19 → Sn = 10/2*(1+19)=100  

2. Total number of terms if Sn = 200, a=3, d=5  
   - Sn = n/2 [2a + (n-1)d] → 200 = n/2[6 + (n-1)*5] → solve n=8
`
  },

  ch6: {
    title: "Triangles",
    content: `
# Chapter 6: Triangles

## 1. Introduction
- A triangle is a polygon with 3 sides  
- Important properties:  
  - Sum of angles = 180°  
  - Exterior angle = sum of opposite interior angles

---

## 2. Similar Triangles
- Two triangles are similar if:  
  1. AAA (All angles equal)  
  2. SAS (Two sides in proportion + included angle equal)  
  3. SSS (All sides in proportion)  

- **Properties of similar triangles**:  
  - Corresponding altitudes proportional to corresponding sides  
  - Corresponding medians proportional to corresponding sides  

---

## 3. Pythagoras Theorem
- In right-angled triangle: **(Hypotenuse)² = (Base)² + (Height)²**  
- Example: Right triangle with sides 3, 4, hypotenuse = √(3²+4²)=5

---

## 4. Area of Triangle
- Heron’s formula:  
  - s = (a+b+c)/2  
  - Area = √[s(s-a)(s-b)(s-c)]  

**Example:** a=3, b=4, c=5 → s=6  
- Area = √[6(6-3)(6-4)(6-5)] = √[6*3*2*1]=√36=6

---

## 5. Solved Problems
1. Find missing side using Pythagoras: sides 5, 12 → hypotenuse = √(5²+12²)=13  
2. Two similar triangles with sides 3,4,5 and 6,8,10 → verify ratios  
3. Area of triangle with sides 7, 24, 25 → s=(7+24+25)/2=28 → Area=√[28*(28-7)*(28-24)*(28-25)] = √[28*21*4*3]=√7056=84

---

## 6. Exercises
1. Prove sum of angles in a triangle = 180°  
2. Find height of triangle given area and base  
3. Solve word problems involving similar triangles  
4. Solve numerical problems using Heron’s formula
`
  },
  ch6: {
    title: "Triangles",
    content: `
# Chapter 6: Triangles

## 1. Introduction
- Triangle: Polygon with 3 sides  
- Angle sum = 180°  
- Exterior angle = sum of opposite interior angles  

---

## 2. Similar Triangles
- Two triangles are similar if: AAA, SAS, SSS  
- Properties: Corresponding sides proportional, altitudes/medians proportional  

---

## 3. Pythagoras Theorem
- In right triangle: Hypotenuse² = Base² + Height²  
- Example: 3-4-5 triangle, hypotenuse = √(3²+4²) = 5  

---

## 4. Area of Triangle
- Heron's formula: s = (a+b+c)/2  
- Area = √[s(s-a)(s-b)(s-c)]  

**Example:** a=7, b=24, c=25 → s=28 → Area=√[28*21*4*3]=84  

---

## 5. Exercises
1. Find missing side using Pythagoras theorem  
2. Prove sum of angles = 180°  
3. Solve problems on similar triangles  
4. Solve Heron’s formula based area questions
`
  },

  ch7: {
    title: "Coordinate Geometry",
    content: `
# Chapter 7: Coordinate Geometry

## 1. Introduction
- Points represented as (x, y) on Cartesian plane  
- x-axis horizontal, y-axis vertical  

---

## 2. Distance Formula
- Distance between P(x₁,y₁) and Q(x₂,y₂):  
**d = √[(x₂-x₁)² + (y₂-y₁)²]**  

**Example:** P(2,3), Q(5,7) → d = √[(5-2)² + (7-3)²] = √(9+16)=5

---

## 3. Midpoint Formula
- Midpoint M = ((x₁+x₂)/2 , (y₁+y₂)/2)  

**Example:** Midpoint of (1,2) & (5,6) → M = ((1+5)/2, (2+6)/2) = (3,4)

---

## 4. Section Formula
- Point dividing line segment in ratio m:n  
- P = ((nx₁ + mx₂)/(m+n), (ny₁ + my₂)/(m+n))  

---

## 5. Area of Triangle using Coordinates
- Area = 1/2 | x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂) |  

---

## 6. Exercises
1. Find distance between (2,3) & (5,7)  
2. Find midpoint of (3,4) & (7,8)  
3. Find coordinates dividing line 2:3  
4. Area of triangle with vertices (0,0),(4,0),(0,3)
`
  },

  ch8: {
    title: "Introduction to Trigonometry",
    content: `
# Chapter 8: Introduction to Trigonometry

## 1. Trigonometric Ratios
- For right triangle with angle θ:  
  - sin θ = opposite/hypotenuse  
  - cos θ = adjacent/hypotenuse  
  - tan θ = opposite/adjacent  
  - cot θ = 1/tan θ  
  - sec θ = 1/cos θ  
  - cosec θ = 1/sin θ  

---

## 2. Trigonometric Identities
- sin²θ + cos²θ = 1  
- 1 + tan²θ = sec²θ  
- 1 + cot²θ = cosec²θ  

---

## 3. Trigonometric Ratios of Some Standard Angles
| θ | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan θ | 0 | 1/√3 | 1 | √3 | ∞ |

---

## 4. Exercises
1. Find sin 30°, cos 60°, tan 45°  
2. Verify sin²θ + cos²θ = 1 for θ=45°  
3. Find missing side using trigonometric ratios  
4. Solve problems using tan θ, cot θ
`
  },

  ch9: {
    title: "Some Applications of Trigonometry",
    content: `
# Chapter 9: Some Applications of Trigonometry

## 1. Heights and Distances
- Use right triangles to measure heights of buildings, towers, etc.  
- Formulas:  
  - height = distance × tan θ  
  - distance = height / tan θ  

---

## 2. Angle of Elevation & Depression
- Angle of Elevation: From observer to top of object  
- Angle of Depression: From observer to bottom of object  

---

## 3. Solved Problems
1. A tower casts shadow 30 m, angle of elevation 30° → height = ?  
   - height = 30 × tan30° = 30 × 1/√3 ≈ 17.32 m  

2. From top of 50 m building, angle of depression to car = 30° → distance?  
   - distance = 50 / tan30° ≈ 86.6 m  

---

## 4. Exercises
1. Find height of tree given shadow and angle of elevation  
2. Solve problems involving angles of elevation/depression  
3. Use sin, cos, tan to solve right triangle
`
  },

  ch10: {
    title: "Circles",
    content: `
# Chapter 10: Circles

## 1. Introduction
- Circle: Set of points at fixed distance (radius) from center  
- Terms: Radius, Diameter, Chord, Arc, Sector, Segment  

---

## 2. Tangent to Circle
- Tangent: Line touching circle at one point  
- Properties:  
  - Radius ⊥ tangent at point of contact  
  - Two tangents from external point are equal  

---

## 3. Angle Properties
- Angle subtended by chord at center = 2 × angle at circumference  
- Angle in semicircle = 90°  

---

## 4. Solved Problems
1. Find length of tangent from point 5 cm from center of circle radius 3 cm  
2. Find angle subtended by chord at center given chord length  
3. Prove angle in semicircle = 90°

---

## 5. Exercises
1. Draw circle with given radius, construct tangents  
2. Verify radius ⊥ tangent  
3. Solve chord and arc related problems  
4. Use circle properties to solve numerical problems
`
  },
  ch10: {
    title: "Circles",
    content: `
# Chapter 10: Circles

## 1. Introduction
- Circle: Set of points equidistant from a center  
- Radius, diameter, chord, tangent, sector, segment – basic terms  

---

## 2. Tangents
- Line touching circle at only 1 point  
- Radius ⊥ tangent at point of contact  
- Two tangents from external point are equal  

**Example:** Radius = 5 cm, point outside 13 cm → tangent length = √(13²-5²)=12 cm  

---

## 3. Angle Properties
- Angle at center = 2 × angle at circumference on same chord  
- Angle in semicircle = 90°  

**Example:** Chord AB subtends 60° at center → angle at circumference = 30°  

---

## 4. Exercises
1. Draw tangent to circle radius 7 cm  
2. Prove radius ⊥ tangent  
3. Solve problems on chord, arc, sector
`
  },

  ch11: {
    title: "Constructions",
    content: `
# Chapter 11: Constructions

## 1. Basic Constructions
- Bisecting angles, constructing perpendiculars, dividing lines  

**Steps to bisect angle:**  
1. Place compass at vertex, draw arc intersecting sides  
2. Draw arcs from intersection points, join intersection to vertex  

---

## 2. Triangle Constructions
- Construct triangle given SSS, SAS, ASA, RHS  
- Example: SSS triangle 5,6,7 cm  

---

## 3. Exercises
1. Bisect given angle  
2. Draw perpendicular from point to line  
3. Construct triangle using given sides
`
  },

  ch12: {
    title: "Areas Related to Circles",
    content: `
# Chapter 12: Areas Related to Circles

## 1. Introduction
- Area = πr², Circumference = 2πr  

---

## 2. Sector & Segment
- Sector area = (θ/360) × πr²  
- Segment area = Sector area – triangle area  

---

## 3. Examples
1. Circle radius 7 → Area = 154 cm²  
2. Sector θ=60°, r=7 → Area ≈ 25.33 cm²  

---

## 4. Exercises
1. Find circle area, sector area, segment area  
2. Solve real-life application problems
`
  },

  ch13: {
    title: "Surface Areas and Volumes",
    content: `
# Chapter 13: Surface Areas and Volumes

## 1. Surface Areas
- Cube: 6a²  
- Cuboid: 2(lb+bh+hl)  
- Sphere: 4πr²  
- Cylinder: 2πr(h+r)  
- Cone: πr(l+r)  

---

## 2. Volumes
- Cube: a³, Cuboid: l×b×h  
- Sphere: 4/3 πr³, Hemisphere: 2/3 πr³  
- Cylinder: πr²h, Cone: 1/3 πr²h  

---

## 3. Examples
1. Cylinder r=7, h=10 → SA = 2πr(h+r)=548 cm²  
2. Volume of cone r=3, h=4 → V=1/3 π r² h ≈ 37.7 cm³

---

## 4. Exercises
1. Find SA and V of different solids  
2. Solve word problems with combinations of solids
`
  },

  ch14: {
    title: "Statistics",
    content: `
# Chapter 14: Statistics

## 1. Introduction
- Data collection, organization, presentation  
- Raw data → Grouped data → Frequency distribution  

---

## 2. Measures of Central Tendency
- Mean = sum/n  
- Median = middle value  
- Mode = most frequent value  

---

## 3. Cumulative Frequency & Graphs
- Use cumulative frequency to find median  
- Bar graph, histogram, ogive, pie chart  

---

## 4. Examples
1. Find mean: 2,3,5,7,10 → (2+3+5+7+10)/5 = 5.4  
2. Median of 5,7,9,11,15 → 9  
3. Mode of 2,2,3,4,2,5 → 2  

---

## 5. Exercises
1. Compute mean, median, mode from given data  
2. Draw histogram/ogive and interpret
`
  },

  ch15: {
    title: "Probability",
    content: `
# Chapter 15: Probability

## 1. Introduction
- Probability: Chance of an event  
- P(E) = favorable outcomes / total outcomes  

---

## 2. Types of Events
- Certain event → P(E)=1  
- Impossible → P(E)=0  
- Equally likely → all outcomes same chance  

---

## 3. Probability Rules
- 0 ≤ P(E) ≤ 1  
- P(not E) = 1-P(E)  

---

## 4. Examples
1. Toss coin → P(Heads)=1/2  
2. Roll dice → P(3)=1/6  
3. Draw card → P(King)=4/52=1/13  

---

## 5. Exercises
1. Probability of even number in dice roll  
2. Probability of red card from deck  
3. Toss coin thrice → P(exactly 2 heads)
`
  }
};



