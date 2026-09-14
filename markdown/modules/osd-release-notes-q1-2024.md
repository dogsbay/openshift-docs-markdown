{%- set _mod_docs_content_type = "REFERENCE" %}
# Q1 2024 {id="osd-q1-2024_{{ context }}"}

The following items were added during the first quarter of 2024. {._abstract}


{{ product_title }} regions added
:   {{ product_title }} on {{ GCP }} is now available in the Delhi, India (`asia-south2`) region. For more information on region availabilities, see [Regions and availability zones](https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/introduction_to_openshift_dedicated/policies-and-service-definition#regions-availability-zones_osd-service-definition).


Policy constraint update
:   {{ product_title }} on {{ GCP }} users are now allowed to deploy clusters with the `constraints/iam.allowedPolicyMemberDomains` constraint in place. This feature allows users to restrict the set of identities that are allowed to be used in Identity and Access Management policies, further enhancing overall security for their resources.