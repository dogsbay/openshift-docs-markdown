{%- set _mod_docs_content_type = "CONCEPT" %}
# Validation status {id="kmm-validation-status_{{ context }}"}

The `PreflightValidationOCP` resource reports validation status and progress for each cluster module in its `.status.modules` list. {._abstract}

The following outlines the fields included in the `.status.modules` list:


`name`
:   The name of the `Module` resource.


`namespace`
:   The namespace of the `Module` resource.


`statusReason`
:   Verbal explanation regarding the status.


`verificationStage`
:   Describes the validation stage being executed:

    *   `Image`: Image existence verification
    *   `Done`: Verification is done

`verificationStatus`
:   The status of the Module verification:

    *   `Success`: Verified
    *   `Failure`: Verification failed
    *   `InProgress`: Verification is in progress