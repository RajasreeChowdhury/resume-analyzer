# Use official Java runtime
FROM openjdk:17

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Make mvnw executable (important for Linux servers)
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

# Run the jar file
CMD ["java", "-jar", "target/*.jar"]