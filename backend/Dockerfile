# Base Python image
FROM python:3.12 

# Set working directory
WORKDIR /app

# Cpoy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-chche-dir -r requirements.txt

# Copy application code
COPY . .

# Expose Django's port when used internally
EXPOSE 8000

# Command to run the application
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
