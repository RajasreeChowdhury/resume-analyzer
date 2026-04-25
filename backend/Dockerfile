# ---- Stage 1: Build ----
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom first for caching
COPY pom.xml ./

# Download dependencies
RUN mvn dependency:go-offline -B

# Copy source
COPY src ./src

# Build jar
RUN mvn clean package -DskipTests

# ---- Stage 2: Run ----
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy jar (safe explicit handling)
COPY --from=build /app/target/*.jar app.jar

# Render provides PORT dynamically
ENV PORT=8080

# JVM production flags (safe default)
ENV JAVA_OPTS="-Xms128m -Xmx512m"

# Run application
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar --server.port=$PORT"]