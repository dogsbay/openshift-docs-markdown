{%- set _mod_docs_content_type = "CONCEPT" %}
# About htpasswd authentication {id="identity-provider-htpasswd-about_{{ context }}"}

Using htpasswd authentication in {{ product_title }} allows you to identify users based on an htpasswd file. An htpasswd file is a flat file that contains the user name and hashed password for each user. You can use the `htpasswd` utility to create this file.


:::warning

Do not use htpasswd authentication in {{ product_title }} for production environments. Use htpasswd authentication only for development environments.

:::