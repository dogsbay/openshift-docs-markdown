{% if context == "creating-machineset-aws" %}
{%- set aws = true -%}
{% endif %}
{% if context == "creating-machineset-azure" %}
{%- set azure = true -%}
{% endif %}
{% if context == "creating-machineset-gcp" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "legacy-preempt" %}
{%- set gcp_legacy_preempt = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
{% if aws %}
# Machine sets that deploy machines as Spot Instances {id="machineset-non-guaranteed-instance_{{ context }}"}
{% endif %}
{% if azure %}
# Machine sets that deploy machines as Spot VMs {id="_machine_sets_that_deploy_machines_as_spot_vms"}
{% endif %}
{% if gcp %}
# Machine sets that deploy machines as Spot VMs {id="_machine_sets_that_deploy_machines_as_spot_vms"}
{% endif %}
{% if gcp_legacy_preempt %}
# Machine sets that deploy machines preemptible VM instances {id="_machine_sets_that_deploy_machines_preemptible_vm_instances"}
{% endif %}

{% if aws %}
You can save on costs by creating a compute machine set running on {{ aws_first }} that deploys machines as non-guaranteed Spot Instances. Spot Instances utilize unused {{ aws_short }} EC2 capacity and are less expensive than On-Demand Instances. You can use Spot Instances for workloads that can tolerate interruptions, such as batch or stateless, horizontally scalable workloads.
{% endif %}
{% if azure %}
You can save on costs by creating a compute machine set running on {{ azure_first }} that deploys machines as non-guaranteed Spot VMs. Spot VMs use unused {{ azure_short }} capacity and are less expensive than standard VMs. You can use Spot VMs for workloads that can tolerate interruptions, such as batch or stateless, horizontally scalable workloads.
{% endif %}
{% if gcp %}
You can save on costs by creating a compute machine set running on {{ gcp_short }} that deploys machines as non-guaranteed Spot VMs. Spot VMs use excess Compute Engine capacity and are less expensive than normal instances. You can use Spot VMs for workloads that can tolerate interruptions, such as batch or stateless, horizontally scalable workloads.
{% endif %}
{% if gcp_legacy_preempt %}
You can save on costs by creating a compute machine set running on {{ gcp_short }} that deploys machines as non-guaranteed preemptible VM instances. Preemptible VM instances use excess Compute Engine capacity and are less expensive than normal instances. You can use preemptible VM instances for workloads that can tolerate interruptions, such as batch or stateless, horizontally scalable workloads. {._abstract}
{% endif %}

{% if aws %}
{{ aws_short }} EC2 can terminate a Spot Instance at any time. {{ aws_short }} gives a two-minute warning to the user when an interruption occurs. {{ product_title }} begins to remove the workloads from the affected instances when {{ aws_short }} issues the termination warning.

Interruptions can occur when using Spot Instances for the following reasons:

*   The instance price exceeds your maximum price
*   The demand for Spot Instances increases
*   The supply of Spot Instances decreases

When {{ aws_short }} terminates an instance, a termination handler running on the Spot Instance node deletes the machine resource. To satisfy the compute machine set `replicas` quantity, the compute machine set creates a machine that requests a Spot Instance.
{% endif %}
{% if azure %}
{{ azure_short }} can terminate a Spot VM at any time. {{ azure_short }} gives a 30-second warning to the user when an interruption occurs. {{ product_title }} begins to remove the workloads from the affected instances when {{ azure_short }} issues the termination warning.

Interruptions can occur when using Spot VMs for the following reasons:

*   The instance price exceeds your maximum price
*   The supply of Spot VMs decreases
*   {{ azure_short }} needs capacity back

When {{ azure_short }} terminates an instance, a termination handler running on the Spot VM node deletes the machine resource. To satisfy the compute machine set `replicas` quantity, the compute machine set creates a machine that requests a Spot VM.
{% endif %}
{% if gcp %}

:::note

{{ gcp_short }} recommends using Spot VMs over preemptible VMs because Spot VMs include new features that preemptible VMs do not support.

:::


{{ gcp_short }} Compute Engine can terminate a Spot VM at any time.
Compute Engine sends a best-effort preemption notice to the user indicating that an interruption will occur after 30 seconds.
{{ product_title }} begins to remove the workloads from the affected instances when Compute Engine issues the preemption notice.
An ACPI G3 Mechanical Off signal is sent to the operating system after 30 seconds if the instance is not stopped.
The Spot VM is then transitioned to a `TERMINATED` state by Compute Engine.

Interruptions can occur when using Spot VMs for the following reasons:

*   There is a system or maintenance event
*   The supply of Spot VMs decreases

When {{ gcp_short }} terminates an instance, a termination handler running on the Spot VM node deletes the machine resource.
To satisfy the compute machine set `replicas` quantity, the compute machine set creates a machine that requests a Spot VM.
{% endif %}
{% if gcp_legacy_preempt %}

:::note

{{ gcp_short }} recommends using Spot VMs over preemptible VMs because Spot VMs include new features that preemptible VMs do not support.

:::


{{ gcp_short }} Compute Engine can terminate a preemptible VM instance at any time. Compute Engine sends a preemption notice to the user indicating that an interruption will occur after 30 seconds. {{ product_title }} begins to remove the workloads from the affected instances when Compute Engine issues the preemption notice. An ACPI G3 Mechanical Off signal is sent to the operating system after 30 seconds if the instance is not stopped. The preemptible VM instance is then transitioned to a `TERMINATED` state by Compute Engine.

Interruptions can occur when using preemptible VM instances for the following reasons:

*   There is a system or maintenance event
*   The supply of preemptible VM instances decreases
*   The instance reaches the end of the allotted 24-hour period for preemptible VM instances

When {{ gcp_short }} terminates an instance, a termination handler running on the preemptible VM instance node deletes the machine resource. To satisfy the compute machine set `replicas` quantity, the compute machine set creates a machine that requests a preemptible VM instance.
{% endif %}

{% if context == "creating-machineset-aws" %}
{%- set aws = "" -%}
{% endif %}
{% if context == "creating-machineset-azure" %}
{%- set azure = "" -%}
{% endif %}
{% if context == "creating-machineset-gcp" %}
{%- set gcp = "" -%}
{% endif %}
{% if context == "legacy-preempt" %}
{%- set gcp_legacy_preempt = "" -%}
{% endif %}