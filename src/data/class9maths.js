export const CLASS_9_MATHS_NOTES = {
  1: {
    title: "Chapter 1: Number Systems",
    content: `
# Number Systems

**Introduction:**  
A number system is a way to represent numbers. In class 9, we study rational and irrational numbers, real numbers, and their properties.

## 1. Real Numbers
- Real numbers include **rational** and **irrational numbers**.
- Rational numbers can be expressed as \`p/q\` where \`q ≠ 0\`.
- Irrational numbers cannot be written as fractions (e.g., \`√2, π\`).

## 2. Fundamental Theorem of Arithmetic
- Every composite number can be expressed as a product of primes uniquely.
- Example: 84 = 2 × 2 × 3 × 7

## 3. Euclid’s Division Lemma
- For any integers \`a\` and \`b (b>0)\`, ∃ unique integers \`q\` and \`r\` such that:
  \`\`\`
  a = bq + r, 0 ≤ r < b
  \`\`\`
- **Example:** Divide 435 by 22  
  \`435 = 22 × 19 + 17\` (q=19, r=17)

## 4. Rational Numbers in Standard Form
- Every rational number can be expressed as \`p/q\` where p and q have no common factor.

## 5. Irrational Numbers
- Numbers which are **not rational**.
- Properties: sum, difference, or product of two irrational numbers may be rational or irrational.

## 6. Decimal Representation
- Rational numbers have **terminating or repeating decimals**.
- Irrational numbers have **non-terminating, non-repeating decimals**.

## 7. Operations on Real Numbers
- Closure, commutative, associative, distributive laws apply.
- **Examples:**
  - (a + b) + c = a + (b + c)
  - a × b = b × a

---

### Examples

**Q1. Express 0.333… as a rational number**  
\`x = 0.333… = 1/3\`

**Q2. Find HCF of 84 and 180 using Euclid’s Lemma**  
84 = 2 × 2 × 3 × 7  
180 = 2 × 2 × 3 × 3 × 5  
**HCF = 2 × 2 × 3 = 12**

**Q3. Write √12 as a simplified surd**  
√12 = √(4×3) = 2√3
    `
  },

  2: {
    title: "Chapter 2: Polynomials",
    content: `
# Polynomials

**Introduction:**  
A polynomial is an expression of the form \`a_n x^n + a_{n-1} x^{n-1} + … + a_0\` where coefficients are real numbers and powers are non-negative integers.

## 1. Degree of a Polynomial
- Highest power of x with a non-zero coefficient.
- Example: 5x^4 + 2x^3 + 3 → Degree = 4

## 2. Types of Polynomials
- Monomial: single term (e.g., 7x)
- Binomial: two terms (e.g., x + 3)
- Trinomial: three terms (e.g., x^2 + x + 1)

## 3. Zero of a Polynomial
- If P(x) = 0 for x = a, then a is a zero of P(x).
- Example: P(x) = x^2 - 5x + 6 → zeros are x=2,3

## 4. Factorization
- Factor Theorem: If P(a)=0, then (x-a) is a factor of P(x).
- Example: Factor x^2 - 5x + 6  
  x^2 - 5x + 6 = (x-2)(x-3)

## 5. Division Algorithm
- P(x) = D(x) × Q(x) + R(x) where degree R < degree D

---

### Examples

**Q1. Find zeros of x^2 + 5x + 6**  
x^2 + 5x + 6 = (x+2)(x+3) → zeros = -2, -3

**Q2. Divide 2x^3 + 3x^2 - x + 5 by x+2**  
Using synthetic division or long division:  
2x^3 + 3x^2 - x + 5 ÷ (x+2) → Quotient = 2x^2 - x - 3, Remainder = 11

**Q3. Factor 3x^2 + 11x + 6**  
3x^2 + 11x + 6 = (3x+2)(x+3)
    `
  },

  3: {
    title: "Chapter 3: Coordinate Geometry",
    content: `
# Coordinate Geometry

**Introduction:**  
Coordinate geometry studies points, lines, and shapes on a plane using coordinates (x, y).

## 1. Cartesian Plane
- Two perpendicular axes: x-axis and y-axis.
- Point represented as (x, y)

## 2. Distance Formula
- Distance between two points (x1, y1) and (x2, y2):  
  \`\`\`
  d = √((x2-x1)^2 + (y2-y1)^2)
  \`\`\`

## 3. Midpoint Formula
- Midpoint of line joining (x1, y1) and (x2, y2):  
  \`\`\`
  M = ((x1+x2)/2 , (y1+y2)/2)
  \`\`\`

## 4. Section Formula
- Dividing a line segment in ratio m:n  
  \`\`\`
  (x, y) = ((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n))
  \`\`\`

## 5. Area of Triangle
- If vertices are A(x1, y1), B(x2, y2), C(x3, y3):  
  \`\`\`
  Area = 1/2 |x1(y2−y3) + x2(y3−y1) + x3(y1−y2)|
  \`\`\`

---

### Examples

**Q1. Find distance between A(2,3) and B(5,7)**  
d = √((5-2)^2 + (7-3)^2) = √(9 + 16) = √25 = 5

**Q2. Find midpoint of A(1,2) and B(3,4)**  
M = ((1+3)/2 , (2+4)/2) = (2, 3)

**Q3. Find area of triangle with vertices (0,0), (4,0), (0,3)**  
Area = 1/2 |0*(0−3) + 4*(3−0) + 0*(0−0)| = 1/2 |12| = 6
    `
  },
4: {
  title: "Chapter 4: Linear Equations in Two Variables",
  content: `
# Linear Equations in Two Variables

**Introduction:**  
A linear equation in two variables x and y has the form:  
\`ax + by + c = 0\` where a, b ≠ 0.

---

## 1. Graphical Method
- Solve for y in terms of x → y = mx + c  
- Plot two points and draw a line.  
- Intersection of two lines = solution of two equations.

**Example:**  
x + y = 5 and x - y = 1  
- Solve 1st: y = 5 - x  
- Solve 2nd: y = x - 1  
- Intersection: x=3, y=2

---

## 2. Substitution Method
- Solve one equation for one variable, substitute into second.  

**Stepwise Example:**  
1. x + y = 5 → y = 5 - x  
2. x - y = 1 → x - (5 - x) = 1 → 2x - 5 = 1 → x=3 → y=2

---

## 3. Elimination Method
- Add or subtract equations to eliminate one variable  

**Example:**  
x + y = 7  
2x - y = 4  
Add: 3x = 11 → x = 11/3  
Then y = 7 - 11/3 = 10/3

---

## 4. Special Cases
- Parallel lines → no solution  
- Coincident lines → infinitely many solutions

---

### Examples

**Q1. Solve:** x + 2y = 7, 2x - y = 1  
**Solution:**  
- From 1st: x = 7 - 2y  
- Substitute: 2(7 - 2y) - y = 1 → 14 -4y - y =1 → -5y = -13 → y=13/5  
- x = 7 - 2*(13/5) = 7 - 26/5 = 9/5

**Q2. Solve:** 3x + 2y = 12, 2x + y = 7  
- Use substitution or elimination to find x=2, y=3
  `
},

5: {
  title: "Chapter 5: Introduction to Euclid’s Geometry",
  content: `
# Introduction to Euclid’s Geometry

**Introduction:**  
Euclidean geometry deals with points, lines, surfaces, and shapes. Based on **Euclid’s 5 postulates**.

---

## 1. Euclid’s 5 Postulates
1. A line segment can be drawn joining any two points.  
2. Any line segment can be extended indefinitely.  
3. A circle can be drawn with any center and radius.  
4. All right angles are equal.  
5. Parallel Postulate: If a line falls on two lines and sum of interior angles < 180°, lines meet.

---

## 2. Basic Terms
- **Point:** No length, breadth, thickness  
- **Line:** Infinite length, no thickness  
- **Line Segment:** Part of a line with two endpoints  
- **Ray:** Part of a line starting at a point, extending infinitely  
- **Angle:** Formed by two rays with common endpoint

---

## 3. Types of Angles
- Acute < 90°  
- Right = 90°  
- Obtuse > 90°  
- Straight = 180°

---

## 4. Angle Properties
- Sum of angles in a triangle = 180°  
- Exterior angle = sum of two opposite interior angles

---

## 5. Construction Examples
1. Bisect a line segment  
2. Draw perpendicular bisector  
3. Construct angles of given measure

---

### Examples

**Q1. Draw perpendicular bisector of AB = 6 cm**  
- Step 1: Draw arcs from A and B with radius > 3 cm  
- Step 2: Join intersection points → bisector

**Q2. Draw angle of 60° using compass**  
- Step 1: Draw base line  
- Step 2: Draw arc from vertex, mark intersection points  
- Step 3: Draw lines from vertex through marked point → 60° angle
  `
},
6: {
  title: "Chapter 6: Lines and Angles",
  content: `
# Lines and Angles

**Introduction:**  
Lines and angles form the basic building blocks of geometry. Understanding their properties is essential for proofs and problem solving.

---

## 1. Types of Lines
- **Parallel Lines:** Lines that never meet  
- **Intersecting Lines:** Lines that meet at a point  
- **Perpendicular Lines:** Lines that meet at right angles (90°)

---

## 2. Types of Angles
- Adjacent angles: Share a common vertex and side  
- Linear pair: Two adjacent angles forming 180°  
- Vertically opposite angles: Equal angles formed when two lines intersect

---

## 3. Angle Sum Property
- Sum of angles in a triangle = 180°  
- Sum of angles in a quadrilateral = 360°

---

## 4. Properties of Parallel Lines
- Corresponding angles are equal  
- Alternate interior angles are equal  
- Co-interior angles sum to 180°

---

### Examples

**Q1. Find x:** If two parallel lines are cut by a transversal and one angle = 50°, find vertically opposite angles.  
- Vertically opposite angles are equal → x = 50°

**Q2. Sum of angles in triangle ABC where ∠A=60°, ∠B=70°**  
- ∠C = 180 - 60 - 70 = 50°
  `
},

7: {
  title: "Chapter 7: Triangles",
  content: `
# Triangles

**Introduction:**  
Triangles are three-sided polygons. Their properties are crucial for solving geometry problems.

---

## 1. Types of Triangles
- By sides: Equilateral, Isosceles, Scalene  
- By angles: Acute, Right, Obtuse

---

## 2. Properties
- Sum of angles = 180°  
- Exterior angle = sum of two opposite interior angles

---

## 3. Congruence of Triangles
- **SSS:** Three sides equal  
- **SAS:** Two sides and included angle equal  
- **ASA:** Two angles and included side equal  
- **RHS:** Right angle, hypotenuse, side equal

---

## 4. Pythagoras Theorem
- In right triangle: \`(hypotenuse)^2 = (base)^2 + (height)^2\`

---

### Examples

**Q1. Triangle with sides 3, 4, 5 – verify RHS congruence**  
- Right triangle: 3² + 4² = 5² → 9+16=25 → correct

**Q2. Find third angle:** ∠A=50°, ∠B=60°  
- ∠C = 180 - 50 - 60 = 70°
  `
},

8: {
  title: "Chapter 8: Quadrilaterals",
  content: `
# Quadrilaterals

**Introduction:**  
Quadrilaterals are four-sided polygons. Properties depend on type: square, rectangle, parallelogram, rhombus, trapezium.

---

## 1. Sum of Interior Angles
- Sum = (n-2)×180 = (4-2)×180 = 360°

---

## 2. Types
- **Parallelogram:** Opposite sides parallel & equal  
- **Rectangle:** All angles 90°, opposite sides equal  
- **Square:** All sides equal & angles 90°  
- **Rhombus:** All sides equal, angles not 90°  
- **Trapezium:** One pair opposite sides parallel

---

## 3. Properties
- Opposite angles of parallelogram are equal  
- Diagonals of rectangle/square bisect each other  
- Diagonals of rhombus are perpendicular

---

### Examples

**Q1. Diagonals of a rectangle 8 cm and 6 cm – find area**  
- Area = length × breadth = 8 × 6 = 48 cm²

**Q2. Find angle in rhombus if one angle = 60°**  
- Opposite angle = 60°, other two = 180-60 = 120° each
  `
},

9: {
  title: "Chapter 9: Circles",
  content: `
# Circles

**Introduction:**  
Circle: Set of points equidistant from center. Important for geometry and mensuration problems.

---

## 1. Terminology
- **Radius:** Distance from center to circumference  
- **Diameter:** Twice radius  
- **Chord:** Line joining two points on circle  
- **Tangent:** Line touching circle at one point  
- **Arc:** Part of circumference

---

## 2. Angle Properties
- Angle at center = 2 × angle at circumference subtended by same chord  
- Opposite angles of cyclic quadrilateral = 180°

---

## 3. Tangent Properties
- Tangent perpendicular to radius at point of contact  
- Lengths of tangents from external point equal

---

### Examples

**Q1. Radius = 7 cm, find circumference & area**  
- Circumference = 2πr = 14π cm  
- Area = πr² = 49π cm²

**Q2. Find tangent length from point P 10 cm from center, r = 6 cm**  
- Use Pythagoras: √(10² - 6²) = √64 = 8 cm
  `
},

10: {
  title: "Chapter 10: Heron’s Formula",
  content: `
# Heron’s Formula

**Introduction:**  
Used to find area of triangle when all sides are known: a, b, c.

---

## 1. Semi-Perimeter
- s = (a + b + c)/2

---

## 2. Heron’s Formula
- Area = √[s(s-a)(s-b)(s-c)]

---

### Examples

**Q1. Triangle sides 7, 8, 5 – find area**  
- s = (7+8+5)/2 = 10  
- Area = √[10(10-7)(10-8)(10-5)] = √[10*3*2*5] = √300 ≈ 17.32

**Q2. Triangle sides 3, 4, 5 → area?**  
- s = (3+4+5)/2 = 6  
- Area = √[6(6-3)(6-4)(6-5)] = √[6*3*2*1] = √36 = 6

**Stepwise Explanation:**  
1. Find semi-perimeter  
2. Subtract each side from s  
3. Multiply all results with s  
4. Take square root
  `
},
11: {
  title: "Chapter 11: Surface Areas and Volumes",
  content: `
# Surface Areas and Volumes

**Introduction:**  
This chapter deals with 3D shapes like cuboids, cubes, spheres, cylinders, cones, and hemispheres. We learn how to calculate **surface area** and **volume** for each.

---

## 1. Cube
- Edge = a  
- Surface Area = 6a²  
- Volume = a³

**Example:** Cube with edge 5 cm  
- SA = 6×5² = 150 cm²  
- V = 5³ = 125 cm³

---

## 2. Cuboid
- Length = l, Breadth = b, Height = h  
- Surface Area = 2(lb + bh + hl)  
- Volume = l×b×h

**Example:** Cuboid 2×3×4  
- SA = 2(2×3 + 3×4 + 4×2) = 52 cm²  
- V = 2×3×4 = 24 cm³

---

## 3. Sphere
- Radius = r  
- Surface Area = 4πr²  
- Volume = 4/3 πr³

**Example:** r=7  
- SA = 4π×49 = 196π cm²  
- V = 4/3 π×343 ≈ 1436.76 cm³

---

## 4. Hemisphere
- Surface Area = 3πr² (curved + base)  
- Volume = 2/3 πr³

---

## 5. Cylinder
- Radius = r, Height = h  
- Curved SA = 2πrh  
- Total SA = 2πr(h+r)  
- Volume = πr²h

---

## 6. Cone
- Radius = r, Slant height = l, Height = h  
- Curved SA = πrl  
- Total SA = πr(l+r)  
- Volume = 1/3 πr²h

---

### Examples

**Q1. Cylinder r=3, h=7 → SA & Volume**  
- SA = 2π×3(3+7) = 60π cm²  
- V = π×3²×7 = 63π cm³

**Q2. Hemisphere r=5 → SA & Volume**  
- SA = 3π×25 = 75π cm²  
- V = 2/3 π×125 ≈ 261.67 cm³
  `
},

12: {
  title: "Chapter 12: Statistics",
  content: `
# Statistics

**Introduction:**  
Statistics involves collecting, organizing, and interpreting data. Main topics: Mean, Median, Mode, and Representation of Data.

---

## 1. Mean (Average)
- Formula: Mean = (Sum of observations) / (Number of observations)

**Example:** Data: 3, 7, 8, 10  
- Sum = 28, n=4 → Mean = 28/4 = 7

---

## 2. Median
- Arrange data in ascending order  
- If n is odd → Middle value  
- If n is even → Average of two middle values

**Example:** Data: 5, 2, 9, 7 → Ascending: 2,5,7,9 → Median = (5+7)/2 = 6

---

## 3. Mode
- Most frequent observation

**Example:** Data: 2,3,2,5,2,6 → Mode = 2

---

## 4. Range
- Range = Max - Min  
- Example: 2,3,7,10 → Range = 10-2 = 8

---

## 5. Graphical Representation
- **Histogram:** Frequency vs Class intervals  
- **Bar Graph:** Categories vs Values  
- **Pie Chart:** Data represented as circle

---

### Examples

**Q1. Find mean:** 4, 8, 6, 10, 12 → Mean = (4+8+6+10+12)/5 = 40/5 = 8  

**Q2. Find median:** 12, 15, 10, 18, 20 → Ascending: 10,12,15,18,20 → Median = 15  

**Q3. Find mode:** 3,3,4,5,3,6,5 → Mode = 3
  `
},

13: {
  title: "Chapter 13: Probability",
  content: `
# Probability

**Introduction:**  
Probability measures the likelihood of an event occurring. Value between 0 and 1.

---

## 1. Experiment, Sample Space, Events
- **Experiment:** Action with outcomes (e.g., toss coin)  
- **Sample Space (S):** All possible outcomes  
- **Event:** Subset of sample space

---

## 2. Probability Formula
- P(E) = Number of favorable outcomes / Total outcomes

---

## 3. Simple Examples
- Toss a coin → S = {H, T}  
  - P(Head) = 1/2  
- Roll a die → S={1,2,3,4,5,6}  
  - P(4) = 1/6

---

## 4. Complementary Event
- P(not E) = 1 - P(E)

**Example:** Roll a die → P(not 4) = 1 - 1/6 = 5/6

---

## 5. Combined Events
- Probability of either event A or B: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

---

### Examples

**Q1. Two dice rolled, probability of sum = 7**  
- Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 outcomes  
- Total outcomes = 36 → P = 6/36 = 1/6

**Q2. Toss 2 coins → probability both heads**  
- Outcomes: HH, HT, TH, TT → Favorable = HH → P = 1/4
  `
}
};

