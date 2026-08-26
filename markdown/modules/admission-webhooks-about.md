{%- set _mod_docs_content_type = "CONCEPT" %}
# Webhook admission plugins {id="admission-webhooks-about_{{ context }}"}

In addition to {{ product_title }} default admission plugins, you can implement dynamic admission through webhook admission plugins that call webhook servers. This approach extends the functionality of the admission chain. {._abstract}

Webhook servers are called over HTTP at defined endpoints.

There are two types of webhook admission plugins in {{ product_title }}:

*   During the admission process, the _mutating admission plugin_ can perform tasks, such as injecting affinity labels.

*   At the end of the admission process, the _validating admission plugin_ validates that an object is configured properly, for example ensuring affinity labels are as expected. If the validation passes, {{ product_title }} schedules the object as configured.

When an API request comes in, mutating or validating admission plugins use the list of external webhooks in the configuration and call them in parallel:

*   If all of the webhooks approve the request, the admission chain continues.
*   If any of the webhooks deny the request, the admission request is denied and the reason for doing so is based on the first denial.
*   If more than one webhook denies the admission request, only the first denial reason is returned to the user.
*   If an error is encountered when calling a webhook, the request is either denied or the webhook is ignored depending on the error policy set.
If the error policy is set to `Ignore`, the request is unconditionally accepted in the event of a failure.
If the policy is set to `Fail`, failed requests are denied.
Using `Ignore` can result in unpredictable behavior for all clients.

{% if not (openshift_rosa or openshift_dedicated) %}
Communication between the webhook admission plugin and the webhook server must use TLS. Generate a CA certificate and use the certificate to sign the server certificate that is used by your webhook admission server. The PEM-encoded CA certificate is supplied to the webhook admission plugin using a mechanism, such as service serving certificate secrets.
{% endif %}

The following diagram illustrates the sequential admission chain process within which multiple webhook servers are called.

**Figure 1. API admission chain with mutating and validating admission plugins**

![API admission stage](/images/api-admission-chain.png)

An example webhook admission plugin use case is where all pods must have a common set of labels. In this example, the mutating admission plugin can inject labels and the validating admission plugin can check that labels are as expected. {{ product_title }} would subsequently schedule pods that include required labels and reject those that do not.

Some common webhook admission plugin use cases include:

*   Namespace reservation.
*   Limiting custom network resources managed by the SR-IOV network device plugin.
{%- if not (openshift_rosa or openshift_dedicated) %}
*   Defining tolerations that enable taints to qualify which pods should be scheduled on a node.
{%- endif %}
*   Pod priority class validation.


:::note

The maximum default webhook timeout value in {{ product_title }} is 13 seconds, and it cannot be changed.

:::