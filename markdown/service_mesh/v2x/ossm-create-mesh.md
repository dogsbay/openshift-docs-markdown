---
title: Adding services to a service mesh
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Adding services to a service mesh {id="ossm-create-mesh"}
{%- set context = "ossm-create-mesh" %}

A project contains services; however, the services are only available if you add the project to the service mesh.

{% leveloffset +1 %}{% include "./modules/ossm-about-adding-namespace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-member-roll-create.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-about-adding-projects-using-smmr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-add-project-member-roll-resource-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-add-project-member-roll-resource-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-about-adding-projects-using-smm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-adding-project-using-smm-resource-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-adding-project-using-smm-resource-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-about-adding-projects-using-label-selectors.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-add-project-using-label-selectors-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-add-project-using-label-selectors-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-tutorial-bookinfo-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-tutorial-bookinfo-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-tutorial-bookinfo-adding-destination-rules.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-tutorial-bookinfo-verify-install.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ossm-tutorial-bookinfo-removing.md" %}{% endleveloffset %}

## Next steps {id="_next_steps"}

*   To continue the installation process, you must [enable sidecar injection](/service_mesh/v2x/prepare-to-deploy-applications-ossm#deploying-applications-ossm).