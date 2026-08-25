{%- set _mod_docs_content_type = "REFERENCE" %}
# Update channels {id="understanding-update-channels_{{ context }}"}

{{ product_title }} offers several update channels for you to choose from, depending on your desired update strategy. {._abstract}

{% if not openshift_origin %}
## fast-{{ product_version }} channel {id="fast-version-channel_{{ context }}"}

The `fast-{{ product_version }}`{minja} channel is updated with new versions of {{ product_title }} {{ product_version }} as soon as Red&#160;Hat declares the version as a general availability (GA) release. As such, these releases are fully supported and purposed to be used in production environments.

## stable-{{ product_version }} channel {id="stable-version-channel_{{ context }}"}

While the `fast-{{ product_version }}`{minja} channel contains releases as soon as their errata are published, releases are added to the `stable-{{ product_version }}`{minja} channel after a delay. During this delay, data is collected from multiple sources and analyzed for indications of product regressions. Once a significant number of data points have been collected, these releases are added to the stable channel.


:::note

Since the time required to obtain a significant number of data points varies based on many factors, Service LeveL Objective (SLO) is not offered for the delay duration between fast and stable channels. For more information, please see "Choosing the correct channel for your cluster"

:::


Newly installed clusters default to using stable channels.

## eus-4.y channel {id="eus-4y-channel_{{ context }}"}

In addition to the stable channel, all even-numbered minor versions of {{ product_title }} offer [Extended Update Support](https://access.redhat.com/support/policy/updates/openshift#ocp4_phases) (EUS). Releases promoted to the stable channel are also simultaneously promoted to the EUS channels. The primary purpose of the EUS channels is to serve as a convenience for clusters performing a Control Plane Only update.


:::note

Both standard and non-EUS subscribers can access all EUS repositories and necessary RPMs (`rhel-*-eus-rpms`) to be able to support critical purposes such as debugging and building drivers.

:::


## candidate-{{ product_version }} channel {id="candidate-version-channel_{{ context }}"}

The `candidate-{{ product_version }}`{minja} channel offers unsupported early access to releases as soon as they are built. Releases present only in candidate channels
may not contain the full feature set of eventual GA releases or features may be removed prior to GA. Additionally, these releases have not been subject to full
Red&#160;Hat Quality Assurance and may not offer update paths to later GA releases. Given these caveats, the candidate channel is only suitable for testing purposes
where destroying and recreating a cluster is acceptable.
{% endif %}

{% if openshift_origin %}
## stable-4 channel {id="stable-4-channel_{{ context }}"}
Releases are added to the `stable-4` channel after passing all tests and stable-4 is the only supported channel.
{% endif %}