---
title: Configuring the automatic image cleanup of the container storage disk
---

# Configuring the automatic image cleanup of the container storage disk {#cnf-image-based-upgrade-configure-auto-image-cleanup}

Configure when the {{ lcao }} cleans up unpinned images in the `Prep` stage by setting a minimum threshold for available storage space through annotations. The default container storage disk usage threshold is 50%.

The {{ lcao }} does not delete images that are pinned in CRI-O or are currently used. The Operator selects the images for deletion by starting with dangling images and then sorting the images from oldest to newest that is determined by the image `Created` timestamp.
