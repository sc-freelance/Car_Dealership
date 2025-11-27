# ---- Base image ----
FROM python:3.10-slim AS backend

# Install OS packages
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

# Set workdir
WORKDIR /app

# Copy backend
COPY backend ./backend
COPY backend/requirements.txt ./backend/requirements.txt

# Install Python deps
RUN pip install --no-cache-dir -r backend/requirements.txt

# ---- Frontend build ----
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# ---- Final runtime ----
WORKDIR /app
COPY backend ./backend
COPY --from=backend /app/frontend/build ./frontend_build

# Expose backend port
EXPOSE 8000

# Collect static files
RUN python backend/manage.py collectstatic --noinput

# Command to run Django
CMD ["python", "backend/manage.py", "runserver", "0.0.0.0:8000"]