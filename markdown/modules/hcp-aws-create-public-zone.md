{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a routable public zone for hosted clusters {id="hcp-aws-create-public-zone_{{ context }}"}

In order to access applications in your hosted clusters, you must configure the routable public zone.  {._abstract}

If the public zone exists, skip this step. Otherwise, the public zone affects the existing functions.

**Procedure**

*   To create a routable public zone for DNS records, enter the following command:
    ```terminal
    $ aws route53 create-hosted-zone \
      --name <basedomain> \
      --caller-reference $(whoami)-$(date --rfc-3339=date)
    ```

    Replace `<basedomain>` with your base domain, for example, `www.example.com`.