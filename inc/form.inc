<?php
use Drupal\Core\Form\FormStateInterface;
use Symfony\Cmf\Component\Routing\RouteObjectInterface;
use Drupal\Component\Render\FormattableMarkup;

// use Drupal\Core\StringTranslation\TranslatableMarkup;
// use Drupal\debug_log\debugLog;

/**
 * Implements hook_form_FORM_ID_alter().
 * # search-block-form
 *
 * @param
 *        	$form
 * @param FormStateInterface $form_state
 * @param
 *        	$form_id
 */
function lesroisdelareno_form_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id)
{
	if (str_contains($form_id, "views_form_view_shopping_cart_block")) {
		$form['#attributes']['class'][] = 'cart-side-bar';
		if (! empty($form['remove_button'])) {
			foreach ( $form['remove_button'] as $key => $remove ) {
				if (is_array($remove) && $remove['#value']) {
					// $form['remove_button'][$key]['#value'] = '<i class="icon-tools"></i>';
					// $form['remove_button'][$key]['#type'] = "button";
					// $form['remove_button'][$key]['#type'] = "button";
					$form['remove_button'][$key]['#wbu_theme_icon'] = [
							'icon_after' => false,
							'icon' => 'icon-trash-1',
							'hidde_text' => true,
							'icon_theme' => "icon",
							'clean_class' => true,
							'class' => [
									'btn',
									'item-remove'
							]
					];
				}
			}
		}
	}
	elseif (str_contains($form_id, "commerce_order_item_add_to_cart_form")) {
		$form['actions']['submit']['#wbu_theme_icon'] = [
				'icon_after' => false,
				'icon' => 'icon-vcard',
				'hidde_text' => false,
				'icon_theme' => "icon",
				'clean_class' => false,
				'class' => [
						'd-block',
						'w-100'
				]
		];
	}
}




