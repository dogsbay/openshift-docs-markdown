{%- set _mod_docs_content_type = "PROCEDURE" %}
# Ensuring a valid IPv4 CIDR format {id="hcp-ts-subnet-cidr-format_{{ context }}"}

If you do not specify subnets in a valid classless inter-domain range (CIDR) format, an error occurs. {._abstract}

**Procedure**

*   Ensure that the CIDR format follows the following format:
    ```text
    X.X.X.X/Y
    ```

    where:

    `X`
    :   is a value from `0` to `255`. The first octet must not be `0`.

    `Y`
    :   is a value from `0` to `30`.
    ```text title="Valid examples"
    100.99.0.0/16
    192.168.1.0/24
    ```
    ```text title="Invalid examples"
    100.99.0.0
    256.1.1.0/16
    0.99.0.0/16
    ```