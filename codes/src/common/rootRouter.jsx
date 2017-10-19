/**
 * @file react router 入口。
 * @description react router 入口。注意：本项目中使用 react router 4.x，它的 API 与以前的版本有很大的不同。
 * @author Zhang Peng
 * @see https://reacttraining.com/react-router/
 * @see https://reacttraining.cn/
 */
import _ from 'lodash';
import exampleRoutes from '../view/example/route';
import generalRoutes from '../view/general/route';
import toolRoutes from '../view/tool/route';
import uiRoutes from '../view/ui/route';

/**
 * 合并所有子路由
 */
const rootRouter = _.concat(generalRoutes, exampleRoutes, uiRoutes, toolRoutes);
export default rootRouter;
