{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring application for {{ product_title }} {id="templates-rails-configuring-application_{{ context }}"}

To configure your Rails application for {{ product_title }}, you must edit the `default` section in the `config/database.yml` file. This is required for {{ product_title }} to supply the correct database credentials at runtime so your application can connect to PostgreSQL on the cluster. {._abstract}

**Procedure**

*   Edit the `default` section in your `config/database.yml` with pre-defined variables as follows:
    ```eruby title="Sample config/database YAML file"
    <% user = ENV.key?("POSTGRESQL_ADMIN_PASSWORD") ? "root" : ENV["POSTGRESQL_USER"] %>
    <% password = ENV.key?("POSTGRESQL_ADMIN_PASSWORD") ? ENV["POSTGRESQL_ADMIN_PASSWORD"] : ENV["POSTGRESQL_PASSWORD"] %>
    <% db_service = ENV.fetch("DATABASE_SERVICE_NAME","").upcase %>

    default: &default
      adapter: postgresql
      encoding: unicode
      # For details on connection pooling, see rails configuration guide
      # http://guides.rubyonrails.org/configuring.html#database-pooling
      pool: <%= ENV["POSTGRESQL_MAX_CONNECTIONS"] || 5 %>
      username: <%= user %>
      password: <%= password %>
      host: <%= ENV["#{db_service}_SERVICE_HOST"] %>
      port: <%= ENV["#{db_service}_SERVICE_PORT"] %>
      database: <%= ENV["POSTGRESQL_DATABASE"] %>
    ```