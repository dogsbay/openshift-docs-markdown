{%- set _mod_docs_content_type = "PROCEDURE" %}

# Resolving incorrect {{ aws_short }} credentials {id="resolving-incorrect-aws-credentials-issue_{{ context }}"}

Resolve credential errors such as `InvalidAccessKeyId` or `NoCredentialProviders` that occur when the `credentials-velero` file is incorrectly formatted. This helps you configure valid {{ aws_short }} credentials for {{ oadp_short }} backup operations. {._abstract}

If you incorrectly format the `credentials-velero` file used for creating the `Secret` object, multiple errors might occur, including the following examples:

*   The `oadp-aws-registry` pod log displays the following error message:
    ```text
    `InvalidAccessKeyId: The AWS Access Key Id you provided does not exist in our records.`
    ```
*   The `Velero` pod log displays the following error message:
    ```text
    NoCredentialProviders: no valid providers in chain.
    ```

**Procedure**

*   Ensure that the `credentials-velero` file is correctly formatted, as shown in the following example:
    ```
    [default]
    aws_access_key_id=AKIAIOSFODNN7EXAMPLE
    aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
    ```

    where:

    `[default]`
    :   Specifies the {{ aws_short }} default profile.

    `aws_access_key_id`
    :   Do not enclose the values with quotation marks (`"`, `'`).